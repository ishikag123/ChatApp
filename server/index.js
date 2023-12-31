import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Server } from "socket.io";
import route from "./Routes/Routes.js";
import Connection from "./Database/db.js";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
//app.use(express.json());
//app.use(bodyParser.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

Connection();

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

const server = app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});

const io = new Server(server, {
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
    io.to(user?.socketId).emit("getMessage", data);
  });
});
