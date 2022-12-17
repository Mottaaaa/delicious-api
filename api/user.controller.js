const router = require("express").Router();
const res = require("express/lib/response");
const UserService = require("../services/user.service");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await UserService.createUser({ username, password });
  res.json(newUser);
});

module.exports = UserController = router;
