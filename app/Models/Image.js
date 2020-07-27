/* eslint-disable class-methods-use-this */
/* eslint-disable strict */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
'use strict';

const Env = use('Env');
const Model = use('Model');

class Image extends Model {
  static get computed() {
    return ['url'];
  }

  getUrl({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`;
  }
}

module.exports = Image;
