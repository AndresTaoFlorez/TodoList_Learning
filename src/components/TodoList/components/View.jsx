import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext'
import '../styles/View.scss'


const View = () => {
  const { view, setView } = useContext(TodoListContext)
  const reorder_img = process.env.PUBLIC_URL + '/images/reorder.png';
  const largeIcon_img = process.env.PUBLIC_URL + '/images/large-icons.png';
  const handleView = () => setView((prev) => !prev)

  return (
    <div className='View'>
      <button className='View__button' onClick={handleView}>
        {view
          ? <img src={reorder_img} alt="reorder_img" />
          : <img src={largeIcon_img} alt="largeIcon_img" />
        }
      </button>
    </div>
  )
}

export { View }