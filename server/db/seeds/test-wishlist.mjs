export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('wishlist').del()

  // Inserts seed entries
  await knex('wishlist').insert([
    {
      id: 0,
      guest_code: '57D6F81D9C774D39A289ACE6AD17DA10',
      event_id: '57D6F81',
      name: 'Bruno',
      wishlist: 'gardening tools and soil',
    },
  ])
}
