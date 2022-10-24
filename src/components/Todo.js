
import React from 'react';
import { useState } from "react";
import Todoform from './Todoform';
import Todolist from './todolist';

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return items.map((item, index) => (
    <div className={item.isComplete ? 'item-row complete' : 'item-row'} key={index}>

    <div key={item.id} onClick={ () => completeItem(item.id)}>
      {item.text}
    </div>

    </div>
  ));
}

export default Todo