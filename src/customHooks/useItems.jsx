import { useEffect, useState } from "react"
import { getToLocalItems, setToLocalItems } from '../services/localStorage'

const useItems = () => {

  const [itemsFinded, setItemsFinded] = useState([])//filtered items
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    try {
      setLoading(true)
      const items = getToLocalItems()
      setItemsFinded(items)
    } catch (e) {
      setErrors(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleComplete = (id) => {
    try {
      setLoading(true)
      const elements = getToLocalItems()
      const index = elements.findIndex(item => item.id === id)
      const newItems = [...elements]
      newItems[index].completed = !newItems[index].completed
      handleSearch(searchValue, newItems)
      setToLocalItems({ items: newItems })
    } catch (e) {
      setErrors(e)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (id) => {
    try {
      setLoading(true)
      const newItems = getToLocalItems()
      const index = newItems.findIndex(item => item.id === id)
      newItems.splice(index, 1)
      handleSearch(searchValue, newItems)
      setToLocalItems({ items: newItems })
    } catch (e) {
      setErrors(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (event = "", itemsState) => {
    try {
      setLoading(true)
      setTimeout(() => {
        const text = typeof event?.target?.value === 'string' ? event.target.value : event
        setSearchValue(text)
        const getItems = getToLocalItems()
        const itemsFindered = (itemsState || getItems || []).filter((item) =>
          item.text.toLowerCase().includes(text.toLowerCase())
        );
        setItemsFinded(!text.length === 0 || !itemsFindered.length > 0 ? [] : itemsFindered)
        setLoading(false)
      }, 500)
    } catch (e) {
      setErrors(e)
    } finally {
    }
  }

  const handleAdd = (text) => {
    try {
      const elements = getToLocalItems()
      const newItems = ([...elements, { id: findFirstAvailableNumber(elements), text, completed: false }])
      handleSearch(searchValue, newItems)
      setToLocalItems({ items: newItems })
    } catch (e) {
      setErrors(e)
    }
  }

  return {
    handleComplete,
    handleDelete,
    handleSearch,
    handleAdd,
    itemsFinded,
    loading,
    errors
  }
}

function findFirstAvailableNumber(num) {
  const ids = num.map(item => item.id) || [];
  const occupied = new Set(ids.map(id => id.toString()));  // Corregido
  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {     // Rango ilimitado
    if (!occupied.has(i.toString())) return i;
  }
  return null;
}


export { useItems }