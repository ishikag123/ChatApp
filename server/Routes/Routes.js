import express from "express";
import {
  registerUser,
  loginUser,
  userInfo,
  getAllUsers,
} from "../Controller/userController.js";
import { newMessage, getMessage } from "../Controller/messageController.js";
import { newConvo, getConvo } from "../Controller/convoController.js";
import { verifyJWT } from "../Middlewares/Auth.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/userinfo", verifyJWT, userInfo);
route.get("/getallusers", getAllUsers);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/conversation/add", newConvo);
route.post("/conversation/get", getConvo);

export default route;
