import connection from '../connection.js'

export function getWishlist(db = connection) {
  return db('guest').select()
}

export function getWishlistById(id, db = connection) {
  return db('guest').select().where('guest_code', id).first()
}

export function createWishlist(wish, db = connection) {
  return db('guest').insert(wish).returning('*')
}

export function updatedWishlist(id, wish, db = connection) {
  return db('guest').where('guest_code', id).update(wish)
}

export function deleteWishlist(id, db = connection) {
  return db('guest').del().where('id', id)
}

export function updateWishlistGifter(assigned, db = connection) {
  const { gifter_id, guest_code, id } = assigned
  return db('guest').where({ guest_code }).update({ gifter_id })
}

export function getEventByInviteId(invite_id, db = connection) {
  console.log(invite_id)
  return db('event').where('invite_id', invite_id).first()
}

export function getWishListByGuestCode(guest_code, db = connection) {
  console.log(guest_code, 'guest_code')
  return db('guest').where('guest_code', guest_code).select()
}

export function getEventById(invite_id, db = connection) {
  console.log(invite_id)
  return db('event').where({ invite_id }).select()
}

export function getGuestByGiftId(gifter_id, db = connection) {
  return db('guest').where('gifter_id', gifter_id).select('wishlist', 'name')
}

export function getById(id, db = connection) {
  return db('guest').where('id', id).first()
}
