/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require('path');


const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));


server.use(async (_,a,next) => {
  await new Promise((res) => {
    setTimeout(res,800);
  });
  next();
});

server.use((req,res,next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({message: "AUTH ERROR"});
  }
  next();
})

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req,res) => {
  const {username, password} = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));
  const {users} = db;

  const userFromBd = users.find((user) => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({message: "AUTH_ERROR"});
});

server.listen(8000, () => {
  console.log("server is running on port 8000");
})



