import React from "react";

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="edit" onClick={() => editUser(user)}>
                Edit
              </button>
              <button onClick={() => deleteUser(user.email)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
