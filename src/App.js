import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url(https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d1cac2ca-5298-4e15-9154-adb6d84507b3.png)" }}>
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;