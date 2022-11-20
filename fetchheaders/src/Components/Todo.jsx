import React from "react";
import AddTodo from "./AddTodo";
import { deletetodo, getdata ,  posttodo,patchtodo} from "./api";
import Todoitem from "./Todoitem";

const Todo = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    handletodo();
  }, []);
const handltoggle=(id,newstatus)=>{
  console.log("handle",newstatus)
  patchtodo({id,newstatus}).then(() => {
    handletodo();
  });
}
  const handletodo = () => {
    setLoading(true);
    setErr(false);
    getdata()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err");
      });
  };
const handleclick=(title,status)=>{
  posttodo({title,status:false}).then(() => {
    handletodo();
  });
}
  const handledelete = (id) => {
    setLoading(true)
    setTimeout(()=>{
      deletetodo(id).then(() => {
        handletodo();
      });
    },500)

  };
  return (
    <div>
      {loading && <div>...loading</div>}
      {err && <div>...errr</div>}
      <AddTodo handleclick={handleclick}></AddTodo>
      <div style={{marginBottom:"5px"}}>
        {data.map((e) => (
          <Todoitem data={e} handledelete={handledelete} handltoggle={handltoggle} key={e.id}></Todoitem>
        ))}
      </div>
    </div>
  );
};

export default Todo;
