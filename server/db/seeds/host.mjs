export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('host').del()

  // Inserts seed entries
  await knex('host').insert([
    { host_id: 1, auth0id: 'fshueisges93942', name: 'Suzanne' },
  ])
}
