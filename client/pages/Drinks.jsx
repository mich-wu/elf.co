import { CSSProperties, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

import { getRandomDrink } from '../apiClient/drinks.js'

const Drinks = () => {
  const [drink, setDrink] = useState({})
  const [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  useEffect(() => {
    getRandomDrink()
      .then((currentDrink) => {
        setDrink(currentDrink)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  const ingredients = useMemo(() => {
    const allIngredients = Object.fromEntries(
      Object.entries(drink).filter(([key]) => key.includes('strIngredient'))
    )
    const ingredientsArray = Object.values(allIngredients).filter(
      (ingredient) => ingredient !== null
    )
    return ingredientsArray
  }, [drink])

  const measures = useMemo(() => {
    const allMeasures = Object.fromEntries(
      Object.entries(drink).filter(([key]) => key.includes('strMeasure'))
    )
    const measuresArray = Object.values(allMeasures).filter(
      (measure) => measure !== null
    )
    return measuresArray
  }, [drink])

  return (
    <>
      <div className='sweet-loading'>
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder='Color of the loader'
        />

        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>

      <div>
        <h1>{drink?.strDrink}</h1>
        <img src={drink?.strDrinkThumb} width='600' alt={drink?.srtDrink}></img>
        <p>Ingredients:</p>
        {ingredients?.map((ingredient, key) => {
          return (
            <li key={key}>
              {measures[key] || 'Add'} {ingredient}
            </li>
          )
        })}
        <p>Glass type: {drink?.strGlass}</p>
        <p>Category: {drink?.strCategory}</p>
        <p>Instructions: {drink?.strInstructions}</p>
      </div>
      <div>
        <Link to='/'>Go Home</Link>
      </div>
    </>
  )
}

export default Drinks
