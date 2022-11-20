import React from "react";
import Todoitems from "./Todoitems";

const Todolist = ({ todos, handletoggle,handledelet }) => {
  return (
    <div>
      {todos.map((todos) => (
        <div key={todos.id}>
          <Todoitems {...todos} handletoggle={handletoggle} handledelet={handledelet}></Todoitems>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
