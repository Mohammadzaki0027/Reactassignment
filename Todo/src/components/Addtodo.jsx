import React from "react";

const Addtodo = ({ handleclick }) => {
  const [text, setText] = React.useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={handlechange}
          placeholder="Enter Something"
        />
        <button
          onClick={function () {
            handleclick(text);
          }}
          id="btn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
