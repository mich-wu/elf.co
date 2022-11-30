/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('host').del()
  await knex('host').insert([
    { host_id: 1, auth0id: 'fshueisges93942', name: 'Suzanne' },
  ])
}
