export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('event').del()

  // Inserts seed entries
  await knex('event').insert([
    {
      event_id: 1,
      host_id: 1,
      invite_code: '57D6F81',
      event_name: 'Trade Me Christmas Party',
      budget: 30,
      date: '19-12-2022',
      status: false,
    },
    {
      event_id: 2,
      host_id: 2,
      invite_code: '8157D6F',
      event_name: 'Bobs Shoe Emporium Christmas Party',
      budget: 50,
      date: '19-12-2022',
      status: false,
    },
    {
      event_id: 3,
      host_id: 3,
      invite_code: 'F81D9C7',
      event_name: 'Sallys Paper Hat Factory Christmas Party',
      budget: 20,
      date: '19-12-2022',
      status: false,
    },
  ])
}
