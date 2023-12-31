import { Server } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.userName === userData.userName) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.userName === userId);
};

io.on("connection", (socket) => {
  console.log("User connected ", socket.id);
  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });
  socket.on("sendMessage", (data) => {
    console.log("message", data);
    const user = getUser(data.receiver);
    console.log("user", user);
    io.to(user.socketId).emit("getMessage", data);
  });
});
