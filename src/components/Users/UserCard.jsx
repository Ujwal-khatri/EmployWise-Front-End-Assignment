import React from 'react';
import '../../styles/Users.css';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="user-info">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="user-actions">
        <button className='edit' onClick={() => onEdit(user)}>Edit</button>
        <button className='delete' onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
