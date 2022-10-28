import React, { useState, useEffect, useRef } from 'react'

function Todoform(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({

      id: Math.floor(Math.random() * 99999),
      text: input,

    });

    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input type='text'
            placeholder='Actualizar item'
            value={input} name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button'>Actualizar</button> </>) :
        (<>
          <input type='text'
            placeholder='Agregar item'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button'>Agregar</button>

        </>)}


    </form>
  )
}

export default Todoform