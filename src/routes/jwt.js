const express = require("express");
const jwt = require("jsonwebtoken");
const ip = require("ip");

const router = express.Router();

router.get("/jwt", (req, res, next) => {
  res.send(req.socket.remoteAddress);
  // const ip = req.socket;
  // res.send(req.socket.ip);
  // const token = jwt.sign({ ip: ip }, "secret");

  // res.send({ success: true, token: token, ip });
});

router.get("/check", async (req, res, next) => {
  const ip = req.socket.remoteAddress;
  const token = req.headers.token;

  try {
    const data = jwt.verify(token, "secret");
    res.send({ success: true, valid: data.ip === ip });
  } catch (e) {
    console.log("error", e);
    res.send({ error: true, message: "invalid token" });
  }
});

module.exports = router;
