import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get/alldetails");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container py-4">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col" className="text-center">S.No</th>
            <th scope="col" className="text-center">Username</th>
            <th scope="col" className="text-center">Lastname</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{user.studentName}</td>
              <td className="text-center">{user.lastName}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">
                <Link
                  className="btn btn-primary mx-2"
                  to={`/view-user/${user.studentId}`}
                >
                  View
                </Link>
                <Link className="btn btn-success mx-2" to={`/edit-user/${user.studentId}`}>Edit</Link>
                <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.studentId)}>Delete</button>   
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
