import connection from '../connection.js'

export function getWishlist(db = connection) {
  return db('wishlist').select()
}

export function createWishlist(wish, db = connection) {
  return db('wishlist').insert(wish)
}
