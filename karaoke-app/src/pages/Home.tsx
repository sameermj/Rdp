import React from 'react';
import { Link } from 'react-router-dom';
import './styles/themes.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Karaoke App</h1>
            <p>Join us for a fun singing experience!</p>
            <div className="navigation">
                <Link to="/karaoke-mode">Start Karaoke</Link>
                <Link to="/team-page">Join a Team</Link>
                <Link to="/profile">Your Profile</Link>
                <Link to="/admin-dashboard">Admin Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;