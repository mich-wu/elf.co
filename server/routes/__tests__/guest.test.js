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

describe('GET /', () => {
  it('Renders the getWishlist db info', () => {
    return request(server)
      .get('/api/v1/wishlist')
      .then((res) => {
        expect(res.status).toBe(200)
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
      })
  })
})

describe('GET /:guest_code/assigned', () => {
  it('Gets wishlist of assigned buddy', async () => {
    const expectedBuddyWishlist = {
      id: 3,
      guest_code: '6F81E9A7DA6AD157DD9C774D3289AC10',
      event_id: 2,
      name: 'Bella',
      wishlist: 'a new house',
    }
    await request(server).get('/api/v1/event/dashboard/2/assign')
    return request(server)
      .get('/api/v1/wishlist/6F81E9A7DA6AD157DD9C774D3289AC10/assigned')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.gifter_id).not.toBeNull()
      })
  })
})

describe('POST /', () => {
  it('Creates a wishlist for user', () => {
    const newData = {
      event_id: 1,
      name: 'Bob',
      wishlist: '2 BBQs and another new lawnmower',
    }
    return request(server)
      .post('/api/v1/wishlist')
      .send(newData)
      .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body[0].wishlist).toContain(
          '2 BBQs and another new lawnmower'
        )
      })
  })
})
