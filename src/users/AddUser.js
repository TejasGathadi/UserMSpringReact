import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addUser", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter Your Name"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
