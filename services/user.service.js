const UserRepository = require("../repository/user.repository");

module.exports = UserService = {
  createUser: async (params) => await UserRepository.createUser(params),
};
