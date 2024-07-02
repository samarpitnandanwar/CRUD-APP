import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, userToEdit }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">{userToEdit ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
