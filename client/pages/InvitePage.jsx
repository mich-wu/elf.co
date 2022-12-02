import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { getEventByInviteCode } from '../apiClient/event'
import { createGuestApi } from '../apiClient/guest'

export default function InvitePage() {
  const initialState = { name: '', guest_code: '', event_id: '' }
  const [event, setNewEvent] = useState(initialState)
  const { invite_code } = useParams()
  const navigate = useNavigate()
  const [guestName, setGuestName] = useState('')
  const [guestCode, setGuestCode] = useState(null)

  // const invite_code: '57D6F81'

  console.log(invite_code, 'invite_code in InvitePage')

  console.log(event, 'newGuest in InvitePage')

  useEffect(() => {
    getEventByInviteCode(invite_code)
      .then((event) => {
        setNewEvent(event)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setNewEvent((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const guest_code = uuidv4()

    const newGuest = {
      guest_code: guest_code,
      name: guestName,
      event_id: invite_code,
    }
    console.log(newGuest, 'newGuest in InvitePage')
    createGuestApi(newGuest)
      .then((guest) => {
        setGuestCode(guest_code)
        navigate(`/wishlist/${guest_code}`)
      })
      .catch((err) => {
        err.message
      })
  }

  return (
    <>
      <h1>InvitePage</h1>
      <h2>{event.event_name}</h2>
      <h3>{event.date}</h3>
      <h3>Budget: ${event.budget}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          value={guestName}
          name='name'
          onChange={(event) => setGuestName(event.target.value)}
        />
        <button type='submit'>Accept</button>
      </form>
    </>
  )
}
