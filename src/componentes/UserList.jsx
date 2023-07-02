import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Función para obtener los usuarios desde la API
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://192.168.59.107:3000/users');
        const data = await response.json();
        setUsers(data);
        console.log("Data: ", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id_user}>{user.user_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
