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

import { createWishlistApi, getWishlistApi } from '../apiClient/wishlist'

export default function AddWishlist() {
  const [newWish, setNewWish] = useState({
    name: '',
    wishlist: '',
  })

  useEffect(() => {
    getWishlistApi()
      .then((wishlist) => {
        setNewWish(wishlist)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  function handleChange(event) {
    const { wish, value } = event.target
    setNewWish((result) => {
      return { ...result, [wish]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target, 'poop')
    return createWishlistApi(newWish)
  }

  return (
    <>
      <h1>YO LETS ADD TO YOUR WISHLISTTTTTT BEEETCHHH</h1>
      <form className='form'>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' onChange={handleChange} />

        <label htmlFor='wishlist'>Wish List: </label>
        <input type='text' name='wishlist' onChange={handleChange} />

        <button onClick={handleSubmit}>ADD TO YOUR WISHLIST!!!</button>
      </form>
    </>
  )
}
