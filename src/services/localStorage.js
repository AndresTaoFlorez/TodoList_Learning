

const setToLocalItems = ({ items }) => {
  if (!items) return
  localStorage.setItem('items', JSON.stringify(items))
}

const getToLocalItems = () => {
  const items = localStorage.getItem('items')
  return items ? JSON.parse(items) : []
}

module.exports = { setToLocalItems, getToLocalItems }