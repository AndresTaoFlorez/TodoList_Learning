import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { TodosLoading } from './TodosLoading';
import { TodoItem } from './TodoItem';
import '../styles/TodoItems.scss';

/**
 * TodoItems component that receives a ref from the parent.
 * The `forwardRef` function allows the `ref` to be passed to the div element.
 */
const TodoItems = () => {
  const { view } = useContext(TodoListContext);
  const { itemsFinded: todos, loading, errors, config } = useContext(TodoListContext);

  return (
    <>
      <TodosLoading />
      {(!loading && !errors) && (
        <>
          {!todos.length && (
            <notFound className="notFound">
              <h2>{config?.pharagraph[3]}</h2>
            </notFound>
          )}
          <div className={`TodoItems`} id='TodoItems'>
            <div className={`TodoItems__child TodoItems__${view ? 'flex' : 'grid'}`}>
              {todos.length > 0 && (
                todos.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { TodoItems };
