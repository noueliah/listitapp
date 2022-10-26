import React, {useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';


function Todolist() {

    const [items, setItems] = useState([]);

    const addItem = item => { // esto chequea que no sea vacío
      if ((!item.text) || /^\s*$/.test(item.text)) {
       return;

      }
     const newItems = [item, ...items]; // acá borré el primer parámetro "item"
      
    setItems(newItems);
  };

  const removeItem = id => {
    const removeArray = [...items].filter(item => item.id !== id)

    setItems(removeArray)
  }

  const updateItem = (itemId, newValue) => {

    if ((!newValue.text) || /^\s*$/.test(newValue.text)) {
      return;
     }

     setItems(prev => prev.map(coso => (coso.id === itemId ? newValue : coso)))
  }

  const completeItem = id => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    })
    setItems(updatedItems);
  }

  return (
    <div>
      <h2> ¿Qué hay que hacer? </h2>
      <Todoform onSubmit={addItem} />
      <Todo 
      items={items}
      completeItem={completeItem}
      removeItem={removeItem}
      updateItem={updateItem}
      />
    </div>
  );
}
export default Todolist