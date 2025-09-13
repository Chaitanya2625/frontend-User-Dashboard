import React, { useState } from 'react';
import { useUsers } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import AddUserForm from '../components/AddUserForm';

function DashboardPage() {
  const { users, loading } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <AddUserForm />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;