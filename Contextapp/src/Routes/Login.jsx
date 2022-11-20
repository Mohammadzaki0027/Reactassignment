import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext, Authpro } from "../Context/AuthContext";
const Login = () => {
  const [form, setForm] = React.useState({ username: "", password: "" });
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        Auth.login(res.token);
        navigate("/Setting");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          name="username"
          onChange={handlechange}
          placeholder="enter username"
          value={form.username}
        />
        <br />

        <input
          type="password"
          name="password"
          onChange={handlechange}
          placeholder="enter password"
          value={form.password}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
