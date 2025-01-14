
import { useContext, useRef} from "react"
import { TodoListContext } from "../context/TodoListContext"
import '../styles/TodoSearch.scss'
import { InlineEditor } from "./inlineEditor";


const TodoSearch = () => {
  const { handleSearch, config } = useContext(TodoListContext)
  const reference = useRef(null);
  const searchBar_ref = useRef(null);

  return <>
    <div className="TodoSearch" ref={reference}    >
      <div className="TodoSearch__searchBar" ref={searchBar_ref}>
        <InlineEditor
          className="TodoSearch__searchBar__input"
          placeholder={`${config?.pharagraph[1]}`}
          onChange={handleSearch}
        />
      </div>
      <span className="TodoSearch__span"></span>
    </div>
  </>
}

export { TodoSearch }
