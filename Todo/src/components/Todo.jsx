import React from "react";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";
const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const handleclick = (text) => {
    if (text !== "") {
      setTodos([...todos, { name: text, id: Date.now(), status: false }]);
    }
  };
  const handledelet = (id) => {
    const updatetodo = todos.filter((item) => item.id !== id);
    setTodos(updatetodo);
    console.log("zaki");
  };
  const handletoggle = (id) => {
    const updatetodo = todos.map((items) =>
      items.id === id
        ? {
            ...items,
            status: !items.status,
          }
        : items
    );
    setTodos(updatetodo);
  };
  return (
    <div>
      <Addtodo handleclick={handleclick}></Addtodo>
      <Todolist
        todos={todos.filter((item) => !item.status)}
        handletoggle={handletoggle}
        handledelet={handledelet}
      ></Todolist>

      <div>
        <h2>Display Completed Todo</h2>
        <Todolist
          todos={todos.filter((item) => item.status)}
          handletoggle={handletoggle}
          handledelet={handledelet}
        ></Todolist>
      </div>
    </div>
  );
};

export default Todo;
