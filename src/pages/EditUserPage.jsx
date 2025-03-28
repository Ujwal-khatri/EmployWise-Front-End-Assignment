import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditUserForm from '../components/Users/EditUserForm.jsx';
import "../styles/EditUser.css";

const EditUserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate('/users');
    return null;
  }

  return (
    <div className="edit-user-page">
      <EditUserForm user={user} />
    </div>
  );
};

export default EditUserPage;
