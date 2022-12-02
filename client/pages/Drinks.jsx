import { useEffect, useState } from 'react'

import { getRandomDrink } from '../apiClient/drinks.js'

const Drinks = () => {
  const [drink, setDrink] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])

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
  }, [drink])

  useEffect(() => {
    const allMeasures = Object.fromEntries(
      Object.entries(drink).filter(([key]) => key.includes('strMeasure'))
    )
    const measuresArray = Object.values(allMeasures).filter(
      (measure) => measure !== null
    )
    setMeasures(measuresArray)
  }, [drink])

  const map1 = new Map([
    [
      ingredients?.length > 0 && (
        <ul>
          {ingredients?.map((ingredient, key) => {
            return <li key={key}>{ingredient}</li>
          })}
        </ul>
      ),
    ],
  ])
  const map2 = new Map([
    [
      measures?.length > 0 && (
        <ul>
          {measures?.map((measure, key) => {
            return <li key={key}>{measure}</li>
          })}
        </ul>
      ),
    ],
  ])

  const map3 = new Map([...map2], [...map1])
  console.log(map3)

  return (
    <>
      <div>
        <h1>{drink?.strDrink}</h1>
        <img src={drink?.strDrinkThumb} width='600' alt={drink?.srtDrink}></img>
        <p>Ingredients:</p>
        <li>
          {map2} {map1}
        </li>
        <p>Glass type: {drink?.strGlass}</p>
        <p>Category: {drink?.strCategory}</p>
        <p>Instructions: {drink?.strInstructions}</p>
      </div>
    </>
  )
}

export default Drinks
