import request from 'supertest'
import { vi } from 'vitest'

import connection from '../../db/connection.js'
import server from '../../server.js'

beforeEach(() => {
  vi.resetAllMocks()
})

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())
afterAll(() => connection.destroy())

// [x].get('/', guestController.getWishlist)
// [x].get('/:id', guestController.getWishlistById)
// [?].get('/:id/event', guestController.getEventById)
// [ ].get('/:guest_code/assigned', guestController.getWishListByGuestCode)
// [ ].post('/', guestController.createWishlist)
// [ ].patch('/:id', guestController.updatedWishlist)
// [ ].put('/:id', guestController.updateWishlistGifter)
// [ ].delete('/:id', guestController.deleteWishlist)

describe('GET /', () => {
  it('Renders the getWishlist db info', () => {
    return request(server)
      .get('/api/v1/wishlist')
      .then((res) => {
        expect(res.status).toBe(200)
        // console.log(res)
      })
  })
})

describe('GET /:id', () => {
  it('Gets wishilist by guest_code', () => {
    const expectedData = {
      id: 0,
      guest_code: '9ACE6AD157D6F81D9C774D39A287DA10',
      event_id: 1,
      name: 'Bruno',
      wishlist: 'gardening tools and soil',
      gifter_id: null,
    }

    return request(server)
      .get('/api/v1/wishlist/9ACE6AD157D6F81D9C774D39A287DA10')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(expectedData)
      })
  })
})

describe('GET :id/event', () => {
  it('Gets event from guest_code', () => {
    const expectedEvent = {
      event_id: 1,
      host_id: 1,
      invite_id: '57D6F81',
      event_name: 'Trade Me Christmas Party',
      budget: 30,
      date: '19-12-2022',
      status: false,
    }

    return request(server)
      .get('/api/v1/wishlist/9ACE6AD157D6F81D9C774D39A287DA10/event')
      .then((res) => {
        expect(res.status).toBe(200)
        // expect(res.body).toEqual(expectedEvent)
      })
  })
})

describe('GET /:guest_code/assigned', () => {
  it('Gets wishlist of assigned buddy', () => {
    const expectedBuddyWishlist = {
      id: 3,
      guest_code: '6F81E9A7DA6AD157DD9C774D3289AC10',
      event_id: 2,
      name: 'Bella',
      wishlist: 'a new house',
    }

    return request(server)
      .get('/api/v1/wishlist/6F81E9A7DA6AD157DD9C774D3289AC10/assigned')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
})
