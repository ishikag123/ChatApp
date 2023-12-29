import express from "express";
import {
  registerUser,
  loginUser,
  userInfo,
  getAllUsers,
} from "../Controller/userController.js";
import { verifyJWT } from "../Middlewares/Auth.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/userinfo", verifyJWT, userInfo);
route.get("/getallusers", getAllUsers);

export default route;
