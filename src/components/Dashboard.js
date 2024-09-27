import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Correct path to AuthContext


const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.name || 'User'}</h2>
      <p>This is your portfolio management area.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
