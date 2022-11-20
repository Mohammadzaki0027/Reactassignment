import React from "react";
import Todolist from "./Todolist";
import axios from "axios";
import Button from "./Button";
const Todo = () => {
  let Limit = 5;

  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(0);
  const [delet, setDelet] = React.useState(0);
  const getdata = async () => {
    let r = await axios.get(
      `http://localhost:8080/Todos/?_page=${page}&_limit=${Limit}`
    );
    setData(r.data);
    let x = Number(r.headers["x-total-count"]);

    let y = Math.ceil(x / Limit);
    setLimit(y);
  };
  const handlclickinc = (value) => {
    setPage((page) => page + value);
  };

  const handlclickdnc = (value) => {
    setPage((page) => page - value);
  };
  React.useEffect(() => {
    getdata();
  }, [page]);
  const handledelet = async (id) => {
    let r = await axios.delete(`http://localhost:8080/Todos/${id}`);
    setData(r.data);
  };
  return (
    <div>
      Todo App
      <div
        style={{
          width: "50%",
          margin: "auto",
        }}
      >
        {data?.map((e) => (
          <Todolist key={e.id} todos={e} deletfun={handledelet}></Todolist>
        ))}
      </div>
      <Button
        increment={() => handlclickinc(1)}
        decrement={() => handlclickdnc(1)}
        page={page}
        y={limit}
      ></Button>
    </div>
  );
};

export default Todo;
