import React, { useEffect, useState } from 'react';
import { useAudio } from '../utils/audioProcessing';
import './KaraokeMode.css';

const KaraokeMode = () => {
    const [lyrics, setLyrics] = useState([]);
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    const { playAudio, pauseAudio, isPlaying } = useAudio();

    useEffect(() => {
        // Fetch lyrics from an API or static file
        const fetchLyrics = async () => {
            const response = await fetch('/path/to/lyrics.json');
            const data = await response.json();
            setLyrics(data);
        };

        fetchLyrics();
    }, []);

    const handlePlay = () => {
        playAudio();
        // Logic to sync lyrics with audio playback
    };

    const handlePause = () => {
        pauseAudio();
    };

    return (
        <div className="karaoke-mode">
            <h2>Karaoke Mode</h2>
            <div className="lyrics">
                {lyrics.map((lyric, index) => (
                    <p key={index} className={index === currentLyricIndex ? 'highlight' : ''}>
                        {lyric.text}
                    </p>
                ))}
            </div>
            <div className="controls">
                <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </div>
    );
};

export default KaraokeMode;