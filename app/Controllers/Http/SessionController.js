/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable class-methods-use-this */
'use strict';

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
}

module.exports = SessionController;
