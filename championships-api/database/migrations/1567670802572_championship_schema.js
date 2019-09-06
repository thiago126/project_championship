'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChampionshipSchema extends Schema {
  up () {
    this.create('championships', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('type_id').unsigned().notNullable()
      table.string('name', 90).notNullable()
      table.text('description').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('championships')
  }
}

module.exports = ChampionshipSchema
