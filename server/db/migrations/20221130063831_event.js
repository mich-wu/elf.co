/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('event', (t) => {
    t.increments('event_id')
    t.integer('host_id')
    t.string('invite_code')
    t.string('event_name')
    t.integer('budget')
    t.date('date')
    t.boolean('status')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}
