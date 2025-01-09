
import { useState, useContext, useRef } from 'react'
import { Modal } from './Modal'
import { IoMdAdd } from "react-icons/io";
import { TodoListContext } from '../context/TodoListContext'
import '../styles/AddTodo.scss'

const AddTodo = () => {
  const { handleAdd, config } = useContext(TodoListContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [text, setText] = useState('')
  const textareRef = useRef(null)

  const createTodo = (e) => {
    e.preventDefault()
    if (text === '') return
    handleAdd(text)
    setIsModalOpen(false)
    setText('')

    if (textareRef.current) {
      textareRef.current.focus(); // Establece el foco al textarea
    }
  }

  const handleWrite = (e) => {
    const textarea = textareRef.current
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`
    }
    if (!e) return;
    setText(e.target.value)
  }

  const handleModal = () => {
    setIsModalOpen((prev) => !prev)
    setText('')
  }

  return (
    <div className="AddTodo">
      <form onSubmit={createTodo} className="AddTodo__form">
        <textarea
          className="AddTodo__textarea"
          ref={textareRef}
          type="text"
          onChange={handleWrite}
          value={text}
          placeholder={config?.pharagraph[4]}
          autoFocus
        />
        <IoMdAdd
          className="AddTodo__icon"
          tabIndex={0}
          onClick={createTodo}
          onKeyDown={(e) => ['Enter', ' '].includes(e.key) && createTodo(e)}
        />
      </form>
    </div>

  )
}
export { AddTodo }