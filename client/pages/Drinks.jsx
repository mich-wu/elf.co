import { useEffect, useState } from 'react'

import { getRandomDrink } from '../apiClient/drinks.js'

const Drinks = () => {
  const [drink, setDrink] = useState({})
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getRandomDrink()
      .then((currentDrink) => {
        setDrink(currentDrink)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  useEffect(() => {
    const allIngredients = Object.fromEntries(
      Object.entries(drink).filter(([key]) => key.includes('strIngredient'))
    )

    const ingredientsArray = Object.values(allIngredients).filter(
      (ingredient) => ingredient !== null
    )

    setIngredients(ingredientsArray)
    console.log(ingredientsArray)
  }, [drink])

  return (
    <>
      <div>
        <h1>{drink?.strDrink}</h1>
        <img src={drink?.strDrinkThumb} width='600' alt={drink?.srtDrink}></img>
        <p>Ingredients:</p>
        {ingredients?.length > 0 && (
          <ul>
            {ingredients?.map((ingredient, key) => {
              return <li key={key}>{ingredient}</li>
            })}
          </ul>
        )}
        <p>Glass type: {drink?.strGlass}</p>
        <p>Category: {drink?.strCategory}</p>
        <p>Instructions: {drink?.strInstructions}</p>
      </div>
    </>
  )
}

export default Drinks
