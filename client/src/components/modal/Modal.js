import React from 'react'
function Modal() {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button> X </button>
            <div className='title'>
            <h1>Modal title</h1>
            </div>
            <div className='body'>
            <p>Body text is here so let's type</p>
            </div>
            <div className='footer'>
            <button>Cancel</button>
            <button>Continue</button>
            </div>
        </div>

    </div>
  )
}

export default Modal