import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/TodoItem.scss';

/**
 * TodoItem component represents a single to-do item with actions for completing or deleting it.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text of the to-do item.
 * @param {boolean} props.completed - Whether the to-do item is completed.
 * @param {function} props.onComplete - Function to execute when the item is marked as completed.
 * @param {function} props.onDelete - Function to execute when the item is deleted.
 * @param {string} [props.customClass=""] - An optional custom CSS class for the list item.
 *
 * @returns {JSX.Element} The rendered to-do item.
 */
const TodoItem = ({
  text = '',
  completed = false,
  customClass = '',
  id = 0
}) => {
  const { handleDelete, handleComplete, config } = useContext(TodoListContext)

  return (
    <li className={`TodoItem ${customClass}`}>
      <div className='TodoItem__checkbox' onClick={() => { handleComplete(id) }}>
        {completed ? <MdCheckBox className='TodoItem__checkbox--completed' size={'1.8em'} /> : <MdCheckBoxOutlineBlank className='TodoItem__checkbox--uncompleted' size={'1.8em'} />}
      </div>
      <p>{text}</p>
      <button className="deleteTask" onClick={() => handleDelete(id)}>
        {config?.pharagraph[5]}
      </button>
    </li>
  );
};

export { TodoItem };
