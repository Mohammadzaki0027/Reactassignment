import axios from "axios";
import React from "react";
import styles from "./Form.modules.css";
const FormDetail = () => {
  const [details, setDetails] = React.useState([]);
  const getdata = async () => {
    let r = await axios.get(`http://localhost:8080/data`);
    setDetails(r.data);
  };
  const updatedata = async (id) => {
    let r = await axios.delete(`http://localhost:8080/data/${id}`);
    console.log(r.data);
  };
  React.useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="append">
        <table style={{ border: "1px solid teal" }}>
          <thead>
            <tr id="tr">
              <th>Photo</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Citizen</th>
              <th>Martial</th>
              <th>Department</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {details.map((e) => (
              <tr>
                <td>
                  <img src={e.photo} alt="" style={{ width: "40px" }} />
                </td>
                <td>{e.username}</td>

                <td>{e.age}</td>
                <td>{e.salary}</td>
                <td>{e.Indian}</td>
                <td>{e.martial}</td>
                <td>{e.dept}</td>
                <td>
                  <button className="btn" onClick={() => updatedata(e.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormDetail;
