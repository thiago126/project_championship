'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchSchema extends Schema {
  up () {
    this.create('matches', (table) => {
      table.increments()
      table.integer('championship_id').unsigned().notNullable()
      table.string('player_01', 90).notNullable()
      table.integer('score_01')
      table.string('player_02', 90).notNullable()
      table.integer('score_02')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchSchema
