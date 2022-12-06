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

// .get('/', guestController.getWishlist)
// .get('/:id', guestController.getWishlistById)
// .get('/:id/event', guestController.getEventById)
// .get('/:guest_code/assigned', guestController.getWishListByGuestCode)
// .post('/', guestController.createWishlist)
// .patch('/:id', guestController.updatedWishlist)
// .put('/:id', guestController.updateWishlistGifter)
// .delete('/:id', guestController.deleteWishlist)

describe('GET /', () => {
  it('Renders the getWishlist db info', () => {
    
    return request (server)
    .get('/api/v1/wishlist')
    .then((res) => {
      expect(res.status).toBe(200)
    })
  })
})

