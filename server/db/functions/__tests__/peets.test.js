import knex from 'knex'

import config from '../../knexfile.js'
import { addPeets, getPeets } from '../peets.js'

const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getPeets', () => {
  it('gets the peets table from the database', () => {
    return getPeets(testDb).then((peets) => {
      expect(peets).toHaveLength(3)
    })
  })
})

describe('addPeets', () => {
  it('adds the peets id, petname, owner and image', () => {
    const rohanPeet = [
      {
        id: 1,
        petname: 'Croissant',
        owner: 'Rohan',
        image: 'PEET-18.jpg',
      },
    ]
    return addPeets('petname', 'owner', 'image', testDb).then((newPeet) => {
      console.log(newPeet)
      expect(newPeet[0]).toBe(4)
    })
  })
})
