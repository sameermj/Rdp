import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers, getAnalytics } from '../services/api';

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUsers();
            const analyticsData = await getAnalytics();
            setUsers(userData);
            setAnalytics(analyticsData);
        };
        fetchData();
    }, []);

    const handleUserAction = (userId: string, action: string) => {
        // Implement user management actions (ban, mute, etc.)
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>User Management</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                            <button onClick={() => handleUserAction(user.id, 'ban')}>Ban</button>
                            <button onClick={() => handleUserAction(user.id, 'mute')}>Mute</button>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Analytics</h2>
                <pre>{JSON.stringify(analytics, null, 2)}</pre>
            </section>
        </div>
    );
};

export default AdminDashboard;