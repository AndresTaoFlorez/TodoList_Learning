import { createContext, useEffect, useState } from "react";
import { useItems } from "../../../customHooks/useItems";
import { pharagraph } from '../text/pharagraphArray';
import { getLocalConfig, setLocalConfig } from "../../../services/localStorage";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const [config, setConfig] = useState();
  const [view, setView] = useState(getLocalConfig().view || false);

  const detectLanguage = () => {
    const language = navigator.language || navigator.userLanguage;
    const spanishSpeakingCountries = [
      'AR', 'BO', 'CL', 'CO', 'CR', 'DO', 'EC', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE'
    ];
    return language.startsWith('es') || spanishSpeakingCountries.includes(language.split('-')[1]?.toUpperCase()) ? 'ES' : 'EN';
  };

  useEffect(() => {
    const language = detectLanguage();
    setConfig({ pharagraph: pharagraph[language].map(obj => Object.values(obj)[0]) || '' });
  }, []);

  useEffect(() => {
    setLocalConfig({ items: { view } });
  }, [view]);

  const { handleComplete, handleDelete, handleSearch, handleAdd, itemsFinded: todos = [], loading = false, errors = null } = useItems();

  return (
    <TodoListContext.Provider value={{
      handleComplete, handleDelete, handleSearch, handleAdd, todos, loading, errors, config, setView, view
    }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListProvider };
