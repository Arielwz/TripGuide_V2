const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const myDB = require("../db/MyDB.js");

// login
router.post("/login", async (req, res) => {
  const userInfo = req.body;

  const userRes = await myDB.searchUser({ username: userInfo.username });
  console.log("user", userRes);

  if (
    userRes &&
    userRes.length > 0 &&
    bcrypt.compareSync(userInfo.password, userRes[0].password)
  ) {
    req.session.userInfo = userInfo;
    return res.send({ success: true });
  }
  return res.send({ success: false, message: "Username or password error" });
});

// regist
router.post("/regist", async (req, res) => {
  const userInfo = req.body;
  const userRes = await myDB.searchUser({ username: userInfo.username });
  if (userRes && userRes.length > 0) {
    return res.send({ success: false, message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const hashedUserInfo = {
    username: userInfo.username,
    password: hashedPassword,
  };
  const newUser = await myDB.creatUser(hashedUserInfo);

  if (newUser) {
    req.session.userinfo = hashedUserInfo;
    return res.send({ success: true });
  }

  return res.send({ success: false, message: "Regist failed" });
});

// log out
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    return res.send({ success: true });
  });
});

// create trips
router.post("/createTrip", async (req, res) => {
  if (!req.session.userInfo) {
    return res
      .status(401)
      .send({ success: false, message: "Please sign in first!" });
  }
  let uploadPath;
  const trip = req.body;

  const image = req.files.image;
  trip.img = "/images/" + image.name;

  await myDB.createTrip(trip);

  uploadPath = __dirname + "/../public/images/" + image.name;

  image.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send({ success: true });
  });
});

// check session
router.get("/checkSession", async (req, res) => {
  if (!req.session.userInfo) {
    return res.send({ success: false });
  }
  res.send({ success: true });
});

//get trips and search trips
router.get("/getTrips", async (req, res) => {
  const searchKey = req.query.searchKey;
  const page = +req.query.page || 0;
  const trips = await myDB.getTrips(page, {
    $or: [
      { name: { $regex: searchKey, $options: "i" } },
      { location: { $regex: searchKey, $options: "i" } },
      { content: { $regex: searchKey, $options: "i" } },
      { tag: { $regex: searchKey, $options: "i" } },
    ],
  });
  res.send({ trips, success: true });
});

router.get("/countRecords", async (req, res) => {
  const searchKey = req.query.searchKey;
  const a = await myDB.countRecords({
    name: { $regex: searchKey, $options: "i" },
  });
  res.send({ a });
});

module.exports = router;
