import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [list,setList] = useState([]);
  const [item,setItem] = useState("");
  const [edit , setEdit] = useState(null);


  const addTodo = ()=>{
    if(item.trim() === "") return;
    list.push(item);
    setList([...list])
    setItem("")
  }
  const removeTodo = (index)=>{
    list.splice(index,1);
    setList([...list])
  }
  const startEdit = (index)=>{
    setItem(list[index])
    setEdit(index)
  }
  const updateTodo = ()=>{
    list[edit] = item;
    setList([...list]);
    setEdit(null);
    setItem("");
  }





  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={item} onChange={(e) =>{setItem(e.target.value)}} />
      {
        edit !== null? (
          <button onClick={updateTodo}>Update</button>
        ) : (
         <button onClick={addTodo}>Add Todo</button>
        )
      }

      <table>
        <tbody>
          {
            list.length !== 0 ? (
              list.map((element , index) =>(
                <tr key={index}>
                  <td>{element}</td>
                  <td><button onClick={()=>{removeTodo(index)}}>Remove</button>
                  <button onClick={()=>{startEdit(index)}}> Edit</button>
                  
                   </td>
                </tr>
              ))
            ): (
              <tr>
                <td>No Data Found</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;