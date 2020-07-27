/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

const User = use('App/Models/User');

class UserController {
  async create({ request }) {
    const data = request.only(['username', 'email', 'password', 'cpf', 'rg']);
    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController;
