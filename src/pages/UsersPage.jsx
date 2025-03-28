import React from 'react';
import UserList from '../components/Users/UserList.jsx';
import "../styles/Users.css";

const UsersPage = () => {
  return (
    <div className="users-page">
      <UserList />
    </div>
  );
};

export default UsersPage;
