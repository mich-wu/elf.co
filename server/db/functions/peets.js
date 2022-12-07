import connection from '../connection.js'

export function getPeets(db = connection) {
  return db('peets').select()
}

export function addPeets(id, petname, owner, image, db = connection) {
  return db('peets').insert({
    id: id,
    petname: petname,
    owner: owner,
    image: image,
  })
}
