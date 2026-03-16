import React, { useState, useEffect } from "react";

function UserForm({ addUser, editingUser, updateUser }) {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>

      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={user.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingUser ? "Update User" : "Add User"}
      </button>

    </form>
  );
}

export default UserForm;