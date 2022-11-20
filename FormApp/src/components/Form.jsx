import React from "react";
import styles from "./Form.modules.css";
import axios from "axios";
const Form = () => {
  const [detail, setDetail] = React.useState({
    photo:
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
  });
  const handlesubmit = () => {
    event.preventDefault();

    adddata(detail);

  
  };
  const adddata = async (detail) => {
    let r = await axios.post(`http://localhost:8080/data`, detail);
  };
  const handlechange = (e) => {
    let { name, value, checked, type, files } = e.target;
    if (type === "checkbox") {
      console.log(e.target.name);
      setDetail({
        ...detail,
        [name]:name,
       
      });
    } else if (type === "file") {
      setDetail({ ...detail, [name]: files });
    } else {
      setDetail({ ...detail, [name]: value });
    }
  };
  return (
    <div>
      <h2>Form</h2>
      <div className="forminput">
        <form action="" onSubmit={handlesubmit}>
          <span>Name : </span>
          <input
            type="text"
            placeholder="enter name of employee"
            name="username"
            onChange={handlechange}
            required={"required"}
          />
          <br />
          <br />
          <span>Age : </span>
          <input
            type="number"
            placeholder="enter age of employee"
            name="age"
            onChange={handlechange}
            required={"required"}
          />
          <br />
          <br />
          <span>Address : </span>
          <input
            type="text"
            placeholder="enter address of employee"
            name="address"
            onChange={handlechange}
            required={"required"}
          />
          <br />
          <br />
          <span>Department : </span>
          <select
            name="dept"
            id=""
            onChange={handlechange}
            required={"required"}
          >
            <option value="">Select Option</option>
            <option value="FED">Front end developer</option>
            <option value="BED">Back end developer</option>
            <option value="FSD">Full stack developer</option>
          </select>
          <br />
          <br />
          <span>Salary : </span>
          <input
            type="number"
            placeholder="enter salary"
            name="salary"
            onChange={handlechange}
            required={"required"}
          />
          <br />
          <br />
          <span>Martial State : </span>
          <select name="martial" id="" onChange={handlechange}>
            <option value="">Select Status</option>
            <option value="Married">Married</option>
            <option value="UnMarried">UnMarried</option>
          </select>
          <br />
          <br />
          <span>Citizen :</span>
          <label style={{ fontWeight: "bold" }}>Indian</label>
          <input
            type="checkbox"
            name="Indian"
            checked={detail.Indian}
            onChange={handlechange}
          />
          <br />
          <br />
          <span>Photo :</span>
          <input type="file" name="fileupoad" onChange={handlechange} />
          <span>Or</span>
          <input
            type="url"
            placeholder="enter url if photo submit issue"
            name="photo"
            onChange={handlechange}
          />
          <button type="onSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
