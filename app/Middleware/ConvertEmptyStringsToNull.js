/* eslint-disable class-methods-use-this */
/* eslint-disable strict */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
'use strict';

class ConvertEmptyStringsToNull {
  async handle({ request }, next) {
    if (Object.keys(request.body).length) {
      request.body = Object.assign(
        ...Object.keys(request.body).map((key) => ({
          [key]: request.body[key] !== '' ? request.body[key] : null,
        }))
      );
    }

    await next();
  }
}

module.exports = ConvertEmptyStringsToNull;
