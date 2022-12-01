import request from 'superagent'

export function getRandomDrink() {
  return request.get(`api/v1/drinks`).then((response) => {
    console.log('drinksapi:', response.body)
    return response.body
  })
}
