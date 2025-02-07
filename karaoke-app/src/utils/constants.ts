export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  GET_USERS: '/api/users',
  GET_TEAMS: '/api/teams',
  CREATE_TEAM: '/api/teams/create',
};

export const DEFAULT_SETTINGS = {
  AUDIO_EFFECTS: {
    ECHO: true,
    REVERB: false,
    PITCH_CORRECTION: true,
  },
  THEME: 'light',
};

export const VIRTUAL_GIFTS = [
  { id: 1, name: 'Star', value: 10 },
  { id: 2, name: 'Heart', value: 20 },
  { id: 3, name: 'Crown', value: 50 },
];