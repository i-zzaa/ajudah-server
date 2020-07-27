/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsersSchema extends Schema {
  up() {
    this.table('users', (table) => {
      table.string('cpf', [11]).defaultTo('00000000000').notNullable();
      table.string('rg', [9]).defaultTo('000000000').notNullable();
    });
  }

  down() {
    this.table('users', (table) => {
      table.string('cpf');
      table.string('rg');
    });
  }
}

module.exports = UsersSchema;
