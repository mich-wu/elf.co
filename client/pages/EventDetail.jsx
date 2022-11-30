import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { getAllParticipants } from '../apiClient/event.js'
// import { useAuth0 } from '@auth0/auth0-react'

// list of participants. When click assign names, will need to assign them into pairs and then put in pairs. Edit them and close event.
// Retrieve every user's name that is attached to the event in the db.
// host page

//1) Map through the partipant info
//2) Edit button
//3) Delete button
//4) Draw - make a pairing
//5) status - set to true/false
const { id } = useParams()
const [guests, setGuests] = useState('')
const [wishlist, setWishlist] = useState('')
const [status, setStatus] = useState('')
const navigate = useNavigate()

useEffect(() => {
  const fetchParticipants = async () => {
    const participants = await getAllParticipants()
    setGuests(participants)
  }
  fetchParticipants()
}, [])

const guestList = (participants) => {
  return participants.filter((participant) => participant.event_id === id)
}

// function handleChange(event)

function handleDraw(event) {
  event.preventDefault()
}

function handleDelete(event) {
  event.preventDefault()
}

const EventDetail = () => {
  return (
    <div className='event-details'>
      {guestList.map((participant, i) => {
        return (
          <div key={i}>
            <div>
              <p>Name: {participant.name}</p>
              <p>Wishlist: {participant.wishlist}</p>

              <div>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        )
      })}

      <div>
        <button onClick={handleDraw}>Draw</button>
      </div>
    </div>
  )
}

export default EventDetail
