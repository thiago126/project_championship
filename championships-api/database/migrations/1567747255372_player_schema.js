'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.integer('championship_id').unsigned().notNullable()
      table.integer('points')
      table.string('email',255).unique()
      table.boolean('on').notNullable()
      table.string('group',255)
      table.string('name', 90).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = PlayerSchema
