import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3000');

export const connectWebSocket = () => {
    socket.connect();
};

export const disconnectWebSocket = () => {
    socket.disconnect();
};

export const onMessageReceived = (callback) => {
    socket.on('message', (message) => {
        callback(message);
    });
};

export const sendMessage = (message) => {
    socket.emit('message', message);
};

export const onUserJoined = (callback) => {
    socket.on('userJoined', (user) => {
        callback(user);
    });
};

export const onUserLeft = (callback) => {
    socket.on('userLeft', (user) => {
        callback(user);
    });
};