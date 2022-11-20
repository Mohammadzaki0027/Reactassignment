import axios from "axios";

export function getdata() {
  return axios.get("http://localhost:8080/todo");
}

export function deletetodo(id) {
  return axios({
    url: `http://localhost:8080/todo/${id}`,
    method: "DELETE",
  });
}
//post todo for add todo
export function posttodo({ title, status }) {
  return axios({
    url: `http://localhost:8080/todo/`,
    method: "POST",
    data: {
      title,
      status,
    },
  });
}
//patchtodo means updaiting todo
export function patchtodo({ id, newstatus }) {
  return axios({
    url: `http://localhost:8080/todo/${id}`,
    method: "PATCH",
    data: {
      id,
      status:newstatus,
    },
  });
}
