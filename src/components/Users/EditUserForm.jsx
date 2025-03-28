import React, { useState } from 'react';
import { updateUser } from '../../api/reqres';
import { useNavigate } from 'react-router-dom';
import '../../styles/EditUser.css';

const EditUserForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, { first_name: firstName, last_name: lastName, email });
      setMessage('User updated successfully.');
      navigate('/users');
    } catch (err) {
      setMessage('Failed to update user.');
    }
  };

  return (
    <div className="edit-user-form-container">
      <h2>Edit User</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <div className="email-input">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required />
          </div>
          
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUserForm;
