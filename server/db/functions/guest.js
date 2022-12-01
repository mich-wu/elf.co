import connection from '../connection.js'

export function getWishlist(db = connection) {
  return db('guest').select()
}

export function getWishlistById(id, db = connection) {
  return db('guest').select().where('guest_code', id)
}

export function createWishlist(wish, db = connection) {
  return db('guest').insert(wish)
}

export function updatedWishlist(id, wish, db = connection) {
  return db('guest').where('guest_code', id).update(wish)
}

export function deleteWishlist(id, db = connection) {
  return db('guest').del().where('id', id)
}
