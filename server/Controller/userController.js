import User from "../Models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      userName: req.body.userName,
      password: req.body.password,
    });
    res.status(200).json({ message: "user registered" });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({
    //name: req.body.name,
    userName: req.body.userName,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        userName: user.userName,
      },
      SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    console.log("login successful");
    res.status(200).json({ message: "user logged in", user: token });
  } else {
    res.json({ status: "error", user: false });
  }
};

export const userInfo = async (req, res) => {
  console.log(req);
  res.json({
    message: "user authenticated",
    user: req.user,
  });
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
