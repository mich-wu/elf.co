import connection from '../connection.js'

export function getPeets(db = connection) {
  return db('peets').select()
}