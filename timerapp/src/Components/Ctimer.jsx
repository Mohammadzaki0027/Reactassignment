import React from "react";
import styled from "styled-components";
const Divwrapper = styled.div`
  width: 100%;
  heigth: 500px;
  border: 1px solid teal;
  margin: auto;
  padding: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 10px;

  label {
    font-size: 20px;
    margin: 0.5rem;
  }
  input {
    font-size: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid teal;
    border-radius: 4px;
    border-bottom: 1px solid teal;
  }
  input:hover {
    background-color: grey;
  }
  @media (max-width: 490px) {
    label {
      font-size: 10px;
      margin: 0.2rem;
    }
    input {
      font-size: 16px;
      width: 40px;
      height: 40px;
      text-align: center;
      border: 1px solid teal;
      border-radius: 2px;
      border-bottom: 1px solid teal;
    }
  }
`;
const Ctimer = ({
  milisecondes,
  seconds,
  minutes,
  hours,
  houchange,
  minchange,
  secchange,
  mecsecchange,
}) => {
  return (
    <Divwrapper>
      <div className="d-flex flex -column">
        <label>HH</label>
        <input value={hours} onChange={houchange} />
        <label>MM</label>
        <input value={minutes} onChange={minchange} />
        <label>SS</label>
        <input value={seconds} onChange={secchange} />
        <label>MS</label>
        <input value={milisecondes} onChange={mecsecchange} />
      </div>
    </Divwrapper>
  );
};

export default Ctimer;
