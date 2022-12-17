const User = require("../models/user");

module.exports = UserRepository = {
  createUser: async ({ username, password }) => {
    const newUser = await User.create({
      username,
      password,
    });
    await newUser.save()
    return newUser.uuid
  },
};
