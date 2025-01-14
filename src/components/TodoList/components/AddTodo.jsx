
import { useState, useContext, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { TodoListContext } from '../context/TodoListContext'
import '../styles/AddTodo.scss'

const AddTodo = () => {
  const { handleAdd, config } = useContext(TodoListContext)
  const [text, setText] = useState('')
  const textareRef = useRef(null)

  const createTodo = (e) => {
    e.preventDefault()
    if (text === '') return
    handleAdd(text)
    setText('')

    if (textareRef.current) {
      textareRef.current.focus(); // Establece el foco al textarea
    }
  }


  const handleWrite = (e) => {
    if (!e) return;
    setText(e.target.value)
  }

  return (
    <div className="AddTodo">
      <form onSubmit={createTodo} className="AddTodo__form">
        <TextareaAutosize
          className="AddTodo__textarea"
          ref={textareRef}
          type="text"
          onChange={handleWrite}
          value={text}
          placeholder={config?.pharagraph[4]}
          autoFocus />
        <button
          className="AddTodo__icon"
          tabIndex={0}
          onClick={createTodo}
          onKeyDown={(e) => ['Enter', ' '].includes(e.key) && createTodo(e)}
        ><p>+</p></button>
      </form>
    </div>

  )
}
export { AddTodo }