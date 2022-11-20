import React from "react";
import Todos from "../../db.json";
import axios from "axios";
const Addtodo = () => {
  const [text, setText] = React.useState("");
  const handlechange = (e) => {
    setText(e.target.value)

  };
  const payload = {
    title: text,
    status: false,
    id: Date.now(),
  };
  const handlesubmit = async () => {
    event.preventDefault();
console.log(payload)
    let r = await axios.post(`http://localhost:8080/Todos`,payload);
    let data = await r.data;
  };
  return (
    <div>
      Addtodo
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handlechange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Addtodo;
