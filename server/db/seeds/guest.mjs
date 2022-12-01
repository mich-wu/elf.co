export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('guest').del()

  // Inserts seed entries
  await knex('guest').insert([
    {
      id: 0,
      guest_code: '57D6F81D9C774D39A289ACE6AD17DA10',
      event_id: 1,
      name: 'Bruno',
      wishlist: 'gardening tools and soil',
    },
    {
      id: 1,
      guest_code: '289ACE6AD157D6F81D9C774D39A7DA10',
      event_id: 1,
      name: 'Bob',
      wishlist: 'BBQ and a new lawnmower',
    },
    {
      id: 2,
      guest_code: '6AD157D6F81D9C774D3289ACE9A7DA10',
      event_id: 2,
      name: 'Brenda',
      wishlist: 'a new car',
    },
    {
      id: 3,
      guest_code: 'E9A7DA6AD157D6F81D9C774D3289AC10',
      event_id: 2,
      name: 'Bella',
      wishlist: 'a new house',
    },
    {
      id: 4,
      guest_code: 'D3289ACE9A7DA6AD157D6F81D9C7741',
      event_id: 3,
      name: 'Boris',
      wishlist: 'a new job',
    },
    {
      id: 5,
      guest_code: 'D9C774D3289ACE9A7DA6AD157D6F81D',
      event_id: 3,
      name: 'Murry',
      wishlist: 'a new cat',
    },
    {
      id: 6,
      guest_code: '157D6F81D9C774D3289ACE9A7DA6AD1',
      event_id: 3,
      name: 'Mandy',
      wishlist: 'a new dog',
    },
    {
      id: 7,
      guest_code: '9A7DA6AD157D6F81D9C774D3289ACE1',
      event_id: 2,
      name: 'Marty',
      wishlist: 'a new car',
    },
    {
      id: 8,
      guest_code: 'D3289ACE9A7DA6AD157D6F81D9C7741',
      event_id: 2,
      name: 'Jeff',
      wishlist: 'a new house',
    },
    {
      id: 9,
      guest_code: 'D9C774D3289ACE9A7DA6AD157D6F81D',
      event_id: 1,
      name: 'Jenny',
      wishlist: 'a new job',
    },
    {
      id: 10,
      guest_code: '157D6F81D9C774D3289ACE9A7DA6AD1',
      event_id: 1,
      name: 'Lawrence',
      wishlist: 'a new boss',
    },
    {
      id: 11,
      guest_code: '9A7DA6AD157D6F81D9C774D3289ACE1',
      event_id: 2,
      name: 'Linda',
      wishlist: 'a new husband',
    },
    {
      id: 12,
      guest_code: 'D3289ACE9A7DA6AD157D6F81D9C7741',
      event_id: 2,
      name: 'Liam',
      wishlist: 'a new wife',
    },
  ])
}
