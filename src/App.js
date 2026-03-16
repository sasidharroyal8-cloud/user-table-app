import React, { useState } from "react";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Sasidhar", email: "sasidharnanabala@gmail.com", phone: "9876543210" },
    { id: 2, name: "Ganesh", email: "ganeshkondeti@gmail.com", phone: "9123456780" }
  ]);

  const [editingUser, setEditingUser] = useState(null);

  // Add user
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Edit user
  const editUser = (user) => {
    setEditingUser(user);
  };

  // Update user
  const updateUser = (updatedUser) => {
    setUsers(
      users.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <UserForm
        addUser={addUser}
        editingUser={editingUser}
        updateUser={updateUser}
      />

      <UserTable
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />

    </div>
  );
}

export default App;