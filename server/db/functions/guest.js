import connection from '../connection.js'

/* 
I want to reduce these functions to simple crud functions.
There should only be an update, delete, get all, get by id, and create.

TODO: merge updateWishlistGifter and updatedWishlist - they are doing the same thing

- move event database functions out of here. 

*/

// GETTING ALL WISHLISTS
export function getWishlist(db = connection) {
  return db('guest').select()
}

//GETTING ALL WISHLISTS BY AN ID
export function getWishlistById(id, db = connection) {
  return db('guest').select().where('guest_code', id).first()
}

// getting all
export function getWishListByGuestCode(guest_code, db = connection) {
  return db('guest').where('guest_code', guest_code).select()
}

export function getById(id, db = connection) {
  return db('guest').where('id', id).first()
}

export function getGuestByGiftId(gifter_id, db = connection) {
  return db('guest').where('gifter_id', gifter_id).select('wishlist', 'name')
}

// CREATE WISHLIST

export function createWishlist(wish, db = connection) {
  return db('guest').insert(wish).returning('*')
}

// UPDATE WISHLIST

export function updatedWishlist(id, wish, db = connection) {
  return db('guest').where('guest_code', id).update(wish)
}

export function updateWishlistGifter(assigned, db = connection) {
  const { gifter_id, guest_code, id } = assigned
  return db('guest').where({ guest_code }).update({ gifter_id })
}

// DELETE WISHLIST

export function deleteWishlist(id, db = connection) {
  return db('guest').del().where('id', id)
}

// what are these doing here

export function getEventByInviteId(invite_id, db = connection) {
  return db('event').where('invite_id', invite_id).first()
}

export function getEventById(invite_id, db = connection) {
  return db('event').where({ invite_id }).select()
}
