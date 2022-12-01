import request from 'superagent'

export function getRandomDrink() {
  return request.get(`/api/v1/drinks`).then((response) => {
    console.log('drinksapi:', response.body.drinks[0])
    return response.body.drinks[0]
  })
}
