import knex from 'knex'

import config from '../../knexfile.js'
const testDb = knex(config.test)

import { getWishlist } from '../guest.js'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getWishlist', () => {
  it('gets the guest table from the database', () => {
    return getWishlist(testDb).then((guest) => {
      expect(guest).toHaveLength(4)
    })
  })

  it('shows the guest name', () => {
    return getWishlist(testDb).then((guest) => {
      expect(guest[0].name).toBe('Bruno')
    })
  })

  it('shows the guests wishlist', () => {
    return getWishlist(testDb).then((guest) => {
      expect(guest[1].wishlist).toBe('BBQ and a new lawnmower')
    })
  })

  it('shows the guests guest-code', () => {
    return getWishlist(testDb).then((guest) => {
      expect(guest[2].guest_code).toBe('1D9C774D326AD157D6F889ACE9A7DA10')
    })
  })
})
