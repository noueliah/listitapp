import React, { useState } from 'react'

function Todoform(props) {
  
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({

        id: Math.floor(Math.random()*99999),
        text: input,

    });

    setInput('');
  };
  
    return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Agregar item'
        value={input} name='text'
        className='todo-input'
        onChange={handleChange} />
        <button className='todo-button'>Agregar</button>
    </form>
  )
}

export default Todoform