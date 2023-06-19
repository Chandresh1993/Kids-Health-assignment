import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// Read Page   
const Read = () => {
  const [apiData, setApiData] = useState([]);
  {
    console.log("api", apiData);
  }

  function getData() {
    axios
      .get("https://6489ad595fa58521cab00a2a.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      }).catch((err)=>{
        console.log("this is get error",err)

      })
  }

  //  Delete 
  function handleDelete(id) {
    axios
      .delete(`https://6489ad595fa58521cab00a2a.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      }).catch((err)=>{
        console.log("This is delete err ", err)

      })
  }

  function setDataToStorage(id, name, phone, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-2 mt-2">
              <Link to="/create">
                <Link to="/create">
                  <button className="btn btn-primary">Create New Data</button>
                </Link>
              </Link>
            </div>
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>Phone no.</th>
                  <th>EMAIL</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((items, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th>{items.id}</th>
                        <td>{items.e_name}</td>
                        <td>{items.e_phone}</td>
                        <td>{items.e_email}</td>
                        <td>
                          <Link to="/edit">
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                setDataToStorage(
                                  items.id,
                                  items.e_name,
                                  items.e_phone,
                                  items.e_email
                                )
                              }
                            >
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (
                                window.confirm("are tou sure to Delete Data ??")
                              ) {
                                handleDelete(items.id);
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Read;
