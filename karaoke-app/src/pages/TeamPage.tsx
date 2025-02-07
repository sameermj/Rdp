import React from 'react';
import { useParams } from 'react-router-dom';
import TeamManagement from '../components/TeamManagement';

const TeamPage: React.FC = () => {
    const { teamId } = useParams<{ teamId: string }>();

    return (
        <div>
            <h1>Team Details</h1>
            <p>Team ID: {teamId}</p>
            <TeamManagement teamId={teamId} />
        </div>
    );
};

export default TeamPage;