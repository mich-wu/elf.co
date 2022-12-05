import nock from 'nock'

import {
  getEventByGuestCodeApi,
  getWishlistApi,
  getWishlistByIdApi,
} from '../guest'

describe('getWishlistApi', () => {
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

describe('getEventByGuestCodeApi', () => {
  it('returns the event based on guest code', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/wishlist/DOGGOLIFE/event')
      .reply(200, {
        id: 3,
        guest_code: 'DOGGOLIFE',
        event_id: 45,
        name: 'DOG',
        wishlist: 'Doggo Toys',
        gifter_id: null,
      })
    return getEventByGuestCodeApi('DOGGOLIFE').then((guest) => {
      expect(guest.name).toBe('DOG')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getWishlistByIdApi', () => {
  it('returns the wishlist based on id', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/wishlist/1')
      .reply(200, {
        id: 1,
        guest_code: 'HAPPYDOGGO',
        event_id: 20,
        name: 'Mr Happy',
        wishlist: 'monkey toy',
        gifter_id: null,
      })
    return getWishlistByIdApi(1).then((guest) => {
      expect(guest.id).toBe(1)
      expect(guest.guest_code).toBe('HAPPYDOGGO')
      expect(guest.name).toBe('Mr Happy')
      expect(guest.wishlist).toBe('monkey toy')
      expect(scope.isDone()).toBe(true)
    })
  })
})
