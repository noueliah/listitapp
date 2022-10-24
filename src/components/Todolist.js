import React, {useState} from 'react'
import Todoform from './Todoform'


function Todolist() {

    const [items, setItems] = useState([]);

    const addItem = item => { // esto chequea que no sea vacío
      if ((!item.text) || /^\s*$/.test(item.text)) {
       return;

      }
     const newItems = [item, ...items]; // acá borré el primer parámetro "item"
      
    setItems(newItems);
  }

  return (
    <div>
      <h2> ¿Qué hay que hacer? </h2>
      <Todoform onSubmit={addItem} />
    </div>
  );
}
export default Todolist