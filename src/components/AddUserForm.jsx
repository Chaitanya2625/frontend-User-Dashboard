import React, { useState } from 'react';
import { useUsers } from '../context/UserContext';

function AddUserForm() {
  const { addUser } = useUsers();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUser({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded mb-4 flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;