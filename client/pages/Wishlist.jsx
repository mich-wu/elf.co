// <WishListForm />
//main layout and refractor our stuff in the components

//<h2>Hello Michelle</h2>
//YO LETS ADD TO YOUR WISHLISTTTTTT BEEETCHHH
//Your partner will be revealed on:

//submit calls  createWishlist()
//Displays your own wishlist getWishlistById()
//with edit button

//conditional later
//Get status - countdown?

import { useEffect, useState } from 'react'

import { createWishlistApi, getWishlistByIdApi } from '../apiClient/wishlist'

export default function AddWishlist() {
  const initialState = { wishlist: '' }
  const [newWish, setNewWish] = useState(initialState)

  useEffect(() => {
    getWishlistByIdApi()
      .then((wishlist) => {
        setNewWish(wishlist)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setNewWish((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    return createWishlistApi(newWish).then(setNewWish(initialState))
  }

  return (
    <>
      <h1>Welcome {newWish.name}. Let's add to your wishlist!</h1>
      <form className='form'>
        <label htmlFor='wishlist'>Wish List: </label>
        <input
          type='text'
          value={newWish.wishlist}
          name='wishlist'
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>ADD TO YOUR WISHLIST!!!</button>
      </form>
    </>
  )
}
