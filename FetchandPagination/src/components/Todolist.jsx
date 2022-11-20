import React from "react";

const Todolist = ({ todos ,deletfun}) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid teal",
          width: "50%",
          margin: "auto",
          height: "100px",
          maxHeight: "400px",
          borderRadius: "50px",
          marginTop: "15px",
        }}
      >
        <h3>{todos.title}</h3>
        <button style={{borderRadius:"10px"}} onClick={()=>deletfun(todos.id)}>Delet</button>
      </div>
    </div>
  );
};

export default Todolist;

// style={{border:"1px solid teal",width:"50%",margin:"auto",height:"35px",maxHeight:"80px"}}
