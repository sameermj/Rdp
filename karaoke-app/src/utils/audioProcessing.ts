import { Howl } from 'howler';

export const createAudioPlayer = (src: string) => {
    return new Howl({
        src: [src],
        html5: true,
        onplay: () => {
            console.log('Audio is playing');
        },
        onend: () => {
            console.log('Audio has finished playing');
        },
    });
};

export const applyAudioEffect = (sound: Howl, effect: string) => {
    switch (effect) {
        case 'echo':
            sound.effects.push({ type: 'echo', delay: 0.1, decay: 0.5 });
            break;
        case 'reverb':
            sound.effects.push({ type: 'reverb', roomSize: 0.5 });
            break;
        case 'pitch':
            sound.rate(1.5); // Example for pitch increase
            break;
        default:
            console.warn('Unknown effect:', effect);
    }
};

export const stopAudio = (sound: Howl) => {
    sound.stop();
};

export const playAudio = (sound: Howl) => {
    sound.play();
};