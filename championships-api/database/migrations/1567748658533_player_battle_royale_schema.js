'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerBattleRoyaleSchema extends Schema {
  up () {
    this.create('player_battle_royales', (table) => {
      table.increments()
      table.integer('championship_id').unsigned().notNullable()
      table.integer('points')
      table.string('email',255).unique()
      table.boolean('on').notNullable()
      table.string('group',255)
      table.string('name', 90).notNullable()
      table.integer('kill')
      table.integer('death')
      table.decimal('k/d')
      table.timestamps()
    })
  }

  down () {
    this.drop('player_battle_royales')
  }
}

module.exports = PlayerBattleRoyaleSchema
