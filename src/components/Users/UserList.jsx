import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../../api/reqres';
import UserCard from './UserCard';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import '../../styles/Users.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const loadUsers = async (pageNumber) => {
    try {
      const data = await fetchUsers(pageNumber);
      setUsers(data.data);
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError('Failed to load users.');
    }
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError('Failed to delete user.');
    }
  };

  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`, { state: { user } });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      {error && <p className="error-message">{error}</p>}
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by first or last name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default UserList;
