import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="bg-white p-4 shadow rounded hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <Link
        to={`/users/${user.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

export default UserCard;