

const setToLocalItems = ({ items }) => {
  if (!items) return
  localStorage.setItem('items', JSON.stringify(items))
}

const getToLocalItems = () => {
  const items = localStorage.getItem('items')
  return items ? JSON.parse(items) : []
}

const setLocalConfig = ({ items }) => {
  if (!items) return
  localStorage.setItem('config', JSON.stringify(items))
}

const getLocalConfig = () => {
  const items = localStorage.getItem('config')
  const res =items ? JSON.parse(items) : []
  return res
}

module.exports = {
  setToLocalItems,
  getToLocalItems,
  setLocalConfig,
  getLocalConfig
}