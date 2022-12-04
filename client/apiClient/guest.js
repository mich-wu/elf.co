import request from 'superagent'
const wishlistURL = '/api/v1/wishlist'

export function getWishlistApi() {
  return request.get(wishlistURL).then((res) => {
    return res.body
  })
}

export function getEventByGuestCodeApi(guest_code) {
  console.log('hit getEventByGuestCodeApi', guest_code)
  return request.get(`${wishlistURL}/${guest_code}/event`).then((res) => {
    console.log('res.body in api call', res.body)
    return res.body
  })
}

export function getWishlistByIdApi(id) {
  return request.get(`${wishlistURL}/${id}`).then((res) => {
    return res.body
  })
}

export function createWishlistApi(wish) {
  return request
    .post(wishlistURL)
    .send(wish)
    .then((res) => {
      return res.body
    })

    .catch(console.error)
}

export function updatedWishlistApi(id, newWish) {
  return request
    .patch(`${wishlistURL}/${id}`)
    .send(newWish)
    .then((res) => {
      return res.body
    })
}

export function deleteWishlistApi(id) {
  return request.delete(`${wishlistURL}/${id}`).then((res) => {
    return res.body
  })
}

export const createGuestApi = async (newGuest) => {
  const res = await request.post('/api/v1/wishlist', newGuest)

  return res.body[0]
}

export const getAssignedWishlist = async (guest_code) => {
  console.log('hit getAssignedWishlist', guest_code)
  const res = await request.get(`/api/v1/wishlist/${guest_code}/assigned`)
  console.log('res.body in getAssignedWishlist', res.body)

  return res.body
}
