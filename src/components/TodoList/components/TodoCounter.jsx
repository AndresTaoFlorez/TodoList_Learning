import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext'
import '../styles/TodoCounter.scss';


/**
 * 
 * @param {*} prop.total - Total de tareas 
 * @param {*} prop.completed - Total de tareas completadas
 * @returns 
 */
const TodoCounter = () => {
  const { itemsFinded, config } = useContext(TodoListContext)

  return <div className='TodoCounter'>
    <div className="TodoCounter__textBox">
      <h1 className='counter'><p>{itemsFinded.length}</p></h1>|
      <h1 className='completed'>{config?.pharagraph[0]}<p>{itemsFinded.filter(item => !!item.completed).length}</p></h1>
      <h1 className='uncompleted'>{config?.pharagraph[6]}<p>{itemsFinded.filter(item => !item.completed).length}</p></h1>
    </div>
  </div>
}

export { TodoCounter };