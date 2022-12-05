import request from 'superagent'

const rootUrl = '/api/v1'

export function getPeets() {
  return request.get(rootUrl + '/peets').then((res) => {
    return res.body
  })
}
// ADD /api/v1/peets/:id
export function addPeets(id, petname, owner, image) {
  return request
    .post()
    .send(newPeet)
    .then((response) => response.body)
}

// export function postShark(shark) {
//   return request
//     .post(sharksUrl)
//     .send(shark)
//     .then((response) => response.body) // just one shark
// }
