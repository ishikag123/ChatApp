import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("No token found!");
  } else {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({
          status: "error",
          message: "failed auth",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
