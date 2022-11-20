import React from "react";

const Button = ({ increment, decrement, page, y }) => {

  return (
    <div>
      <button onClick={decrement} disabled={page === 1}>
        Prev
      </button>
      <button onClick={increment} disabled={page === y}>
        Next
      </button>
    </div>
  );
};

export default Button;
