import nock from 'nock'

import { createEvent } from '../event'

describe('createEvent', () => {
  it('creates a secret santa event', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/event')
      .reply(200, {
        host_id: 6,
        invite_id: '57D6F99',
        event_name: 'Puppy Christmas Party',
        budget: 65,
        date: 18 - 12 - 2022,
      })

    return createEvent().then((event) => {
      expect(event.event_name).toBe('Puppy Christmas Party')
      expect(scope.isDone()).toBe(true)
    })
  })
})
