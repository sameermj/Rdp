export interface User {
    id: string;
    username: string;
    email: string;
    avatarUrl?: string;
}

export interface Team {
    id: string;
    name: string;
    members: User[];
    leaderId: string;
}

export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
}

export interface AudioEffect {
    name: string;
    type: 'echo' | 'reverb' | 'pitchCorrection';
    settings: Record<string, any>;
}

export interface KaraokeSession {
    songId: string;
    lyrics: string[];
    currentLyricIndex: number;
    isPlaying: boolean;
}

export interface Recording {
    id: string;
    userId: string;
    audioUrl: string;
    createdAt: Date;
}