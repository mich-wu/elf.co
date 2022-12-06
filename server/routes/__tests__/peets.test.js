import nock from 'nock'
import request from 'supertest'

import server from '../../server.js'

beforeEach(() => {
  vi.restAllMocks()
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
})
