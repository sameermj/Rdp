import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import TeamPage from './pages/TeamPage';
import KaraokeMode from './components/KaraokeMode';
import ChatRoom from './components/ChatRoom';
import AudioEffects from './components/AudioEffects';
import RecordingPlayback from './components/RecordingPlayback';
import TeamManagement from './components/TeamManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/team/:id" component={TeamPage} />
        <Route path="/karaoke" component={KaraokeMode} />
        <Route path="/chat" component={ChatRoom} />
        <Route path="/audio-effects" component={AudioEffects} />
        <Route path="/recording" component={RecordingPlayback} />
        <Route path="/team-management" component={TeamManagement} />
      </Switch>
    </Router>
  );
};

export default App;