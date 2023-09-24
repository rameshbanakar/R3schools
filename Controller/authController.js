const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signinUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(409).send("User already exists");
  }
  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  user.password=hashPass
  await user.save()
  const payload = { user: { id: user.id } };
  const token = await jwt.sign(payload, process.env.JWT_SECRET);
  res.send({token})
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  //console.log(req.body)
  const user = await User.findOne({ email });
  // console.log(user)
  if (!user) {
    return res.status(404).send("User not Found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send("Creditials not correct");
  }
  const payload = { user: { id: user.id } };
  const token = await jwt.sign(payload, process.env.JWT_SECRET);
  res.send({token});
};
