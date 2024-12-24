/** @format */

const socketIO = require('socket.io');
const {getUserInfo} = require('../auth');

let io;

const socketService = (server) => {
  io = socketIO(server, {
    transports: ['websocket', 'polling'],
    path: '/socket/order-service',
  });

  io.use(async (socket, next) => {
    const {token} = socket.handshake.auth;
    console.log({token});
    let user = null;
    if (token) {
      user = await getUserInfo(token);
    }
    socket.userId = user?._id;
    next();
  });

  io.on('connection', (socket) => {
    const {userId} = socket;
    try {
      socket.join(userId);
      socket.emit('JOIN_ROOM_SUCCESS', {
        userId,
      });
    } catch (error) {
      console.log('error', error);
    }

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io is not initialized!');
  }
  return io;
};

module.exports = {socketService, getIO};
