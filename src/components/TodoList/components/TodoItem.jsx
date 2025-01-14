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
 * @param {string} [props.customClass=""] - An optional custom CSS class for the list item.
 * @param {number} props.id - The ID of the to-do item.
 *
 * @returns {JSX.Element} The rendered to-do item.
 */
const TodoItem = ({
  text = '',
  completed = false,
  customClass = '',
  id = 0
}) => {
  const { handleDelete, handleComplete, config, view } = useContext(TodoListContext);

  return (
    <li className={`TodoItem ${customClass} TodoItem__${view ? 'flex' : 'grid'}`}>
      <div
        className='TodoItem__checkbox'
        onClick={() => handleComplete(id)}
        role="button"
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleComplete(id)}
      >
        {completed ? (
          <MdCheckBox className='TodoItem__checkbox--completed' size={'1.8em'} />
        ) : (
          <MdCheckBoxOutlineBlank className='TodoItem__checkbox--uncompleted' size={'1.8em'} />
        )}
      </div>

      <p className={`paragraph ${completed ? 'completed' : ''}`}>{text}</p>

      <button
        className="deleteTask"
        onClick={() => handleDelete(id)}
        aria-label="Delete task"
      >
        {config?.paragraph?.[5] || 'Delete'}
      </button>
    </li>
  );
};

export { TodoItem };
