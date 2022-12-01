import { useEffect, useState } from 'react'

import { getRandomDrink } from '../apiClient/drinks.js'

const Drinks = () => {
  const [drink, setDrink] = useState([])

  useEffect(() => {
    getRandomDrink()
      .then((currentDrink) => {
        setDrink(currentDrink)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  return (
    <>
      <div>
        <h1>{drink?.srtDrink}</h1>
        <img src={drink?.strDrinkThumb} alt={drink?.srtDrink}></img>
        {/* <p>Ingredients: {drink.ingredients}</p> */}
        <p>Instructions: {drink?.strInstructions}</p>
        <p>Glass type: {drink?.strGlass}</p>
        <p>Category: {drink?.strCategory}</p>
      </div>
    </>
  )
}

export default Drinks
