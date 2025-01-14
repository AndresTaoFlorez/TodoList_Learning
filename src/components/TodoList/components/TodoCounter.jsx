import { useContext, useMemo } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import '../styles/TodoCounter.scss';

/**
 * Componente TodoCounter: muestra el conteo total, tareas completadas y pendientes.
 */
const TodoCounter = () => {
  const { todos, config } = useContext(TodoListContext);

  // Calcular valores derivados de todos usando useMemo para optimizar rendimiento.
  const { total, completed, uncompleted } = useMemo(() => {
    const completedCount = todos.filter(item => !!item.completed).length;
    return {
      total: todos.length,
      completed: completedCount,
      uncompleted: todos.length - completedCount,
    };
  }, [todos]);

  return (
    <div className="TodoCounter">
      <div className="TodoCounter__textBox">
        <h1 className="counter">
          <p>{total}</p>
        </h1>
        |
        <h1 className="completed">
          {config?.pharagraph?.[0]}
          <p>{completed}</p>
        </h1>
        <h1 className="uncompleted">
          {config?.pharagraph?.[6]}
          <p>{uncompleted}</p>
        </h1>
      </div>
    </div>
  );
};

export { TodoCounter };
