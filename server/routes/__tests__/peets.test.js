//import nock from 'nock'
import request from 'supertest'

import * as db from '../../db/functions/peets.js'
import server from '../../server.js'

beforeEach(() => {
  vi.resetAllMocks()
})

describe('GET/api/v1/peets', () => {
  const mockData = [
    {
      id: 1,
      petname: 'Croissant',
      owner: 'Rohan',
      image: 'PEET-18.jpg',
    },
    {
      id: 2,
      petname: 'Frank',
      owner: 'Ben',
      image: 'PEET-12.jpg',
    },
  ]
  test.skip('returns an array of peets', () => {
    db.getPeets.mockReturnValue(Promise.resolve(mockData))
    return request(server)
      .get('/api/v1/peets')
      .then((res) => {
        expect(res.body).toHaveLength(2)
      })
  })
})
