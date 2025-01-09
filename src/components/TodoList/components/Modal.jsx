import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Modal.scss'

const Modal = ({ children, onClick: handleModal }) => {

  const modalRoot = document.getElementById('root-modal')

  const handleBackgroundClick = (e) => {
    if (e.target.className !== "Modal") return
    handleModal()
  }

  return ReactDOM.createPortal(
    <>
      <div className='Modal' onClick={handleBackgroundClick}>
        {children}
      </div>
    </>
    , modalRoot)
}

export { Modal }