import nock from 'nock'

import { getWishlistApi } from '../guest'

describe('apiClient/guest.js', () => {
  it('returns the guest db', () => {
    const scope = nock('http://localhost').get('/api/v1/wishlist').reply(200, {
      id: 2,
      guest_code: '1D9C774D326AD157D6F889ACE9A7DA10',
      event_id: 2,
      name: 'Brenda',
      wishlist: 'a new car',
      gifter_id: null,
    })
    return getWishlistApi().then((guestList) => {
      expect(guestList.name).toBe('Brenda')
      expect(guestList.guest_code).toBe('1D9C774D326AD157D6F889ACE9A7DA10')
      expect(guestList.event_id).toBe(2)
      expect(guestList.wishlist).toBe('a new car')
      expect(scope.isDone()).toBe(true)
    })
  })
})
