import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


// Edit
function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setPhone(localStorage.getItem("phone"));
    setEmail(localStorage.getItem("email"));
  }, []);

  //  send datq to Edit page
  const handleUpdate = (e) => {
    e.preventDefault();

    if(!name || !phone || !email){
      alert("Please fill in all fields")
      return;
    }
    axios.put(`https://6489ad595fa58521cab00a2a.mockapi.io/crud/${id}`, {
      e_name: name,
      e_phone: phone,
      e_email: email,
    }).then(()=>{
      navigate('/')
      
    }).catch((err)=>{
      console.log("this is put error",err)

    })

  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
          
              <Link to="/" className="p-2">
                <button className="btn btn-primary">Read data</button>
              </Link>
              <Link to="/create">
                <button className="btn btn-warning">Create data</button>
              </Link>
            
          </div>
          <div className="bg-success p-1 text-center border border-dark ">
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="from-group">
              <label>Enter Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>

            <div className="from-group">
              <label>Enter Phone no:</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone no"
                className="form-control"
              />
            </div>

            <div className="from-group">
              <label>Enter Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
            </div>

            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default Edit;
