import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { getRandomDrink } from '../apiClient/drinks.js'

const Drinks = () => {
  const [drink, setDrink] = useState({})

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
