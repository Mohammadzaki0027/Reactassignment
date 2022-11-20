import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRouter";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <AllRoutes></AllRoutes> 
    </div>
  );
}

export default App;