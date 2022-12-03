import nock from 'nock'
import request from 'supertest'

import server from '../../server.js'

beforeEach(() => {
  vi.resetAllMocks()
})

describe('GET/api/v1/drinks', () => {
  it('gets a random drink from the external API')
  const scope = nock('https://www.thecocktaildb.com')
    .get('/api/v1/drinks')
    .reply(200, {
      drinks: [
        {
          idDrink: '11013',
          strDrink: 'Alaska Cocktail',
          strTags: 'Beach,Chilli',
          strCategory: 'Ordinary Drink',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions:
            'Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.',
        },
      ],
    })
  return request(server)
    .get('/')
    .then((data) => {
      console.log('poop', data)
      expect(data.body.strGlass).toContain('Cocktail glass')
      expect(scope.isDone()).toBe(true)
    })
})
