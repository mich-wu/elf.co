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
// [ ].get('/:id', guestController.getWishlistById)
// [ ].get('/:id/event', guestController.getEventById)
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
        console.log(res)
      })
  })
})

describe('GET /:id', () => {
  it('Gets wishilist by guest_code', () => {
    const mockData = {
      id: 0,
      guest_code: '287DA10',
      event_id: 1,
      name: 'Bruno',
      wishlist: 'gardening tools and soil',
      gifter_id: expect.any(Number),
    }

    return request(server)
      .get('/api/v1/wishlist/287DA10')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toContain(mockData)
      })
  })
})
