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

//TODO:

// import useParams from react-router-dom
// get guest_code from useParams
// add guest_code to updatedWishlistApi(guest_code, newWish)
// add guest_code to getWishlistByIdApi, return current wishlist to show name ect on page

import { useEffect, useState } from 'react'

import { getWishlistByIdApi, updatedWishlistApi } from '../apiClient/guest'

export default function AddWishlist() {
  const initialState = { wishlist: '' }
  const [newWish, setNewWish] = useState(initialState)

  const dummy = {
    guest_code: 123,
    event_id: 987,
    name: 'Minnie Mouse',
    wishlist: '',
  }
  const partner = 'Mickey Mouse in da House'
  const partnerWishlist = 'cheese and more cheese'
  const completed = true

  console.log(newWish, 'newWish in AddWishlist with guest_code')

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
    console.log(name, value, 'name value')
    setNewWish((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    return updatedWishlistApi(newWish).then(setNewWish(initialState))
  }

  return (
    <>
      <h1>Welcome {dummy.name}. Add to your wishlist!</h1>
      {completed ? (
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
      ) : (
        <>
          <p>Your assigned partner is {partner}</p>
          <p>Their wishlist: {partnerWishlist}</p>
        </>
      )}
    </>
  )
}
