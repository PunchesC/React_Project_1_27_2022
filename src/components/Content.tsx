import "./Content.css"
import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa'

function Content(){
  const[items,setItems]=useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
  },
  {
      id: 2,
      checked: false,
      item: "Item 2"
  },
  {
      id: 3,
      checked: false,
      item: "Item 3"
  }
  ]);
  

  const handleCheck = (id: number) => {
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked}: item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

// NEED TO WORK ON Inline styling to put a line-through
// const labelStyle = {item === checked ? { textDecoration: 'line-through' } : null}

  return (
    <div className="Content">
      {items.length ? (
          <ul>
            {items.map((item)=>(
              <li className="Item" key={item.id}>
                <input
                type="checkbox"
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}
                />
                <label
                                    // style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                    onDoubleClick={() => handleCheck(item.id)}
                                >{item.item}</label>
                <FaTrashAlt 
                onClick={()=>handleDelete(item.id)}
                role="button"  
                />
              </li>
            ))}
          </ul>
      ): (
        <p style={{marginTop: '2rem'}}>Your list is empty.</p>
      )}
    </div>
    )
  }
  
  export default Content;