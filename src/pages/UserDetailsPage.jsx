import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserDetailsPage() {
  const { id } = useParams();
  const { users } = useUsers();

  // Look for the user in context first
  const user = users.find(u => u.id === parseInt(id, 10));

  if (!user) return <p className="p-4">User not found</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <Link to="/" className="text-sm text-blue-600 hover:underline">← Back</Link>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-600">{user.company?.name}</p>
      </div>
    </div>
  );
}
