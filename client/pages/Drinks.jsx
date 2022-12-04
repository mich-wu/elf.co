import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { getRandomDrink } from '../apiClient/drinks.js'
import Spinner from '../components/Spinner'

const Drinks = () => {
  const [drink, setDrink] = useState({})
  const [loading, setLoading] = useState(true)
  const [showText, setShowText] = useState(false)

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

  const handleLoad = () => {
    setLoading(false)
    setShowText(true)
  }

  return (
    <>
      <div>
        <img
          src={drink?.strDrinkThumb}
          width='600'
          alt={drink?.srtDrink}
          onLoad={handleLoad}
        ></img>

        {showText ? (
          <>
            <h1>{drink?.strDrink}</h1>
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
            <div>
              <Link to='/'>Go Home</Link>
            </div>
          </>
        ) : (
          <Spinner loading={loading} />
        )}
      </div>
    </>
  )
}

export default Drinks
