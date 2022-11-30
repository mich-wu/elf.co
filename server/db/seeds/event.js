/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('event').del()
  await knex('event').insert([
    {
      event_id: 1,
      host_id: 1,
      invite_code: 's4249isk',
      event_name: 'Trade Me Christmas Party',
      budget: 30,
      date: '19-12-2022',
      status: false,
    },
  ])
}
