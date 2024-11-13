import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> User Details</h2>
            <div className="card">
              <div className="card-header">
                <b> Details of User ID: {user.id}</b>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item my-2">
                    <b>Name: </b>
                    {user.name}
                  </li>
                  <li className="list-group-item my-2">
                    <b>Username: </b>
                    {user.username}
                  </li>
                  <li className="list-group-item my-2">
                    <b>Email: </b>
                    {user.email}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-primary my-3" to={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
