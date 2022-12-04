import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getAssignedWishlist,
  getEventByGuestCodeApi,
  getWishlistByIdApi,
  updatedWishlistApi,
} from '../apiClient/guest'

export default function Wishlist() {
  const [newWish, setNewWish] = useState(null)
  const { guest_code } = useParams()
  const [showForm, setShowForm] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [eventResult, setEventResult] = useState([])
  const [assignedWishlist, setAssignedWishlist] = useState(null)

  useEffect(() => {
    getWishlistByIdApi(guest_code)
      .then((wishlist) => {
        setNewWish(wishlist)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  useEffect(() => {
    getEventByGuestCodeApi(guest_code)
      .then((event) => {
        setEventResult(event[0].status)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  useEffect(() => {
    getAssignedWishlist(guest_code)
      .then((assigned) => {
        setAssignedWishlist(assigned)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  const handleEdit = () => {
    setShowForm(!showForm)
    setSubmitted(!submitted)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setNewWish((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    updatedWishlistApi(guest_code, newWish)
      .then(setShowForm(false))
      .then(setSubmitted(true))
  }

  return (
    <div>
      <h1>Hi {newWish?.name}! </h1>

      {eventResult === 1 ? (
        <>
          <h2>Here is your wishlist:</h2>
          <p>Current Wishlist Item: {newWish?.wishlist}</p>
          <h2>Here is your assigned wishlist:</h2>
          <p>Assigned Person: {assignedWishlist?.name}</p>
          <p>Their Wishlist: {assignedWishlist?.wishlist}</p>
        </>
      ) : (
        <>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <label htmlFor='wishlist'>Add Wishlist:</label>
              <input
                type='text'
                name='wishlist'
                id='wishlist'
                value={newWish?.wishlist}
                onChange={handleChange}
              />
              <button type='submit'>Add Wishlist</button>
            </form>
          )}
          <div>
            <p>Current Wishlist Item: {newWish?.wishlist}</p>
            {submitted && <button onClick={handleEdit}>Edit Wishlist</button>}
          </div>
        </>
      )}
    </div>
  )
}
