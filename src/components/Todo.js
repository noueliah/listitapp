
import React from 'react';
import { useState } from "react";
import Todoform from './Todoform';
import Todolist from './Todolist';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { RiCheckboxMultipleLine } from 'react-icons/ri';

function Todo( items, completeItem, removeItem ) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return items.map((item, index) => (
    <div className={item.isComplete ? 'item-row complete' : 'item-row'} key={index}>

    <div key={item.id} onClick={ () => completeItem(item.id)}>
      {item.text}
    </div>

    <div className='icons'>
     <RiCheckboxMultipleLine 
     onClick={() => removeItem(item.id)}
     className='delete-icon'
     />

     <RiCheckboxMultipleFill
     onClick={() => setEdit ({id: item.id, value: item.text })}
     className='edit-icon'
     />
    </div>

    </div>
  ));
}

export default Todo