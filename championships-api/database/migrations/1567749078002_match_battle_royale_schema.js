'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchBattleRoyaleSchema extends Schema {
  up () {
    this.create('match_battle_royales', (table) => {
      table.increments()
      table.integer('championship_id').unsigned().notNullable()
      for(var i = 1; i <= 100; i++){
        table.integer('position_' + i)
      }
      table.timestamps()
    })
  }

  down () {
    this.drop('match_battle_royales')
  }
}

module.exports = MatchBattleRoyaleSchema
