import axios from "axios";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

//  Create page   
function Create() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !phone || !email){
      alert("Please Fill in all Fields");
      return;
    }
    
    axios
      .post("https://6489ad595fa58521cab00a2a.mockapi.io/crud", {
        e_name: name,
        e_phone: phone,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      }).catch((err)=>{
        console.log("this is post error",err)

      })
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mb-2 mt-2 ">
            <Link to="/" className="p-2">
              <button className="btn btn-success">Read data</button>
            </Link>
            <Link to="/edit">
              <button className="btn btn-primary">Edit data</button>
            </Link>
        </div>
        <div className="bg-warning p-1 text-center  border border-dark ">
          <h1>SKIDS Health Assignment </h1>
        </div>
        <div className="bg-warning p-1 text-center border border-dark ">
          <h1>Create Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="from-group">
            <label>Enter Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="from-group">
            <label>Enter Phone no:</label>
            <input
              type="number"
              placeholder="Phone no"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="from-group">
            <label>Enter Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />
          <div className="d-grid">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
