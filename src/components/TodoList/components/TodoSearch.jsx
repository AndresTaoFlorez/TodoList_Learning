
import { useContext, useRef, useState, useEffect } from "react"
import { TodoListContext } from "../context/TodoListContext"
import '../styles/TodoSearch.scss'

const TodoSearch = () => {
  const { handleSearch, config } = useContext(TodoListContext)
  const [inputWidth, setInputWidth] = useState("auto");

  // Ref para acceder al input y al span
  const inputRef = useRef(null);
  const spanRef = useRef(null);

  const adjustWidth = () => {
    if (inputRef.current && spanRef.current) {
      spanRef.current.textContent = inputRef.current.value;
      setInputWidth(`${spanRef.current.offsetWidth + 10}px`);
    }
  };

  useEffect(() => {
    adjustWidth();
  }, [inputRef.current?.value]);

  return <>
    <div className="TodoSearch">
      <input
        ref={inputRef}
        placeholder={`${config?.pharagraph[1]}`}
        onChange={handleSearch}
        onInput={adjustWidth} // Ajuste del tamaño al escribir
        style={{ width: inputWidth }}
      />
      <span ref={spanRef} className="input-helper" />
    </div>
  </>
}

export { TodoSearch }