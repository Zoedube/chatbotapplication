import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Code to register into application

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username =? ";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Code to the user password credentials
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been successfully created!");
    });
  });
}

//Code to check credential details
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status (404).json("User has not been found!");

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].
      id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    const { password, ...other } = data[0];
      res.cookie("access_token", token, {
        httOnly: true, 
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "prodution" ? "None" : "Lax",
        maxAge: 60 * 60 * 1000,
      }).status(200).json(other);
  });
}
