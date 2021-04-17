var express = require("express");
var router = express.Router();
const myDB = require("../db/MyDB.js");

// login
router.post("/login", async (req, res) => {
  const userInfo = req.body;

  const userRes = await myDB.searchUser(userInfo);
  if (userRes && userRes.length > 0) {
    req.session.userInfo = userInfo;
    res.send({ success: true });
    return;
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
  const newUser = await myDB.creatUser(userInfo);
  if (newUser) {
    req.session.userinfo = userInfo;
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

// get users
router.get("/getUsers", async (req, res) => {
  const users = await myDB.searchUser({ username: req.query.username });
  res.send({ users });
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
    name: { $regex: searchKey },
  });
  res.send({ trips, success: true });
});

router.get("/countData", async (req, res) => {
  const searchKey = req.query.searchKey;
  const tripCount = await myDB.countData(searchKey);
  if (tripCount) {
    res.send({ amount: tripCount });
  }
});

module.exports = router;
