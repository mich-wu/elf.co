import knex from 'knex'

import config from '../../../../knexfile.js'
import { getWishlist } from '../guest.js'
const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getWishlist', () => {
  it('gets the guest table', () => {
    return getWishlist(testDb).then((guest) => {
      expect(guest[0].name).toBe('Bruno')
    })
  })
})
