import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [list, setList] = useState([]);

  const [item, setItem] = useState("");

  const addTodo = () => {
    if (item.trim() === "") return;

    setList([...list, item]);
    setItem("");
  };
  const removeTodo = (index) =>{
    list.splice(index, 1)
    setList([...list])
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter Something"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => (
              <tr key={index}>
                <td>{element}</td>
                <td><button onClick={()=> {removeTodo(index)}} > Remove</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
