import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { TodosLoading } from './TodosLoading';
import { TodoItem } from './TodoItem';
import '../styles/TodoItems.scss';

const TodoItems = () => {
  const { view, todos, loading, errors, config } = useContext(TodoListContext);

  // Mostrar estado de carga
  if (loading) return <TodosLoading />;

  // Mostrar mensaje de error
  if (errors) {
    return (
      <div className="errorMessage">
        <h2>{config?.paragraph?.[4] || 'Error al cargar las tareas'}</h2>
      </div>
    );
  }

  // Mostrar mensaje si no hay tareas
  if (!todos.length) {
    return (
      <div className="notFound">
        <h2>{config?.paragraph?.[3] || 'No hay tareas disponibles'}</h2>
      </div>
    );
  }

  return (
    <div className={`TodoItems TodoItems__${view ? 'flex' : 'grid'}`} id="TodoItems">
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id} id={id} text={text} completed={completed} />
      ))}
    </div>
  );
};

export { TodoItems };
