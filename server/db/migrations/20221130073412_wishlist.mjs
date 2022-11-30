export const up = async (knex) => {
  return knex.schema.createTable('wishlist', (table) => {
    table.increments('id')
    table.string('guest_code')
    table.string('event_id')
    table.string('name')
    table.string('wishlist')
  })
}

export const down = async (knex) => {
  return knex.schema.dropTable('wishlist')
}
