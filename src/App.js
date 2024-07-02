import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save data to local storage whenever users state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.email === updatedUser.email ? updatedUser : user
      )
    );
    setUserToEdit(null);
  };

  const editUser = (user) => {
    setUserToEdit(user);
  };

  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        userToEdit={userToEdit}
      />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
