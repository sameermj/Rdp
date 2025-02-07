import React, { useState, useEffect } from 'react';

const TeamManagement = () => {
    const [teams, setTeams] = useState([]);
    const [newTeamName, setNewTeamName] = useState('');

    useEffect(() => {
        // Fetch teams from the API
        const fetchTeams = async () => {
            // Replace with actual API call
            const response = await fetch('/api/teams');
            const data = await response.json();
            setTeams(data);
        };

        fetchTeams();
    }, []);

    const handleCreateTeam = async () => {
        if (!newTeamName) return;

        // Replace with actual API call
        const response = await fetch('/api/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newTeamName }),
        });

        if (response.ok) {
            const createdTeam = await response.json();
            setTeams([...teams, createdTeam]);
            setNewTeamName('');
        }
    };

    return (
        <div>
            <h2>Team Management</h2>
            <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                placeholder="Enter new team name"
            />
            <button onClick={handleCreateTeam}>Create Team</button>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamManagement;