import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { deleteGuest, getAllParticipants } from '../apiClient/event.js'

// list of participants. When click assign names, will need to assign them into pairs and then put in pairs. Edit them and close event.
// Retrieve every user's name that is attached to the event in the db.
// host page

//1) Map through the partipant info // DONE
//2) Delete button // DONE
//3) Draw - make a pairing
//4) status - set to true/false

const EventDetail = () => {
  const { event_id } = useParams()
  // const [guests, setGuests] = useState('')
  const [guestList, setGuestList] = useState([])
  // const [wishlist, setWishlist] = useState('')
  // const [status, setStatus] = useState('')

  async function handleDelete(guest_id) {
    const participants = await deleteGuest(guest_id)
    const newList = participants.filter(
      (participant) => participant.event_id == event_id
    )
    setGuestList(newList)
  }

  useEffect(() => {
    const fetchParticipants = async () => {
      const participants = await getAllParticipants()
      const newList = participants.filter(
        (participant) => participant.event_id == event_id
      )
      setGuestList(newList)
    }
    fetchParticipants()
  }, [])

  // function handleChange(event)

  function handleDraw(event) {
    event.preventDefault()
  }

  return (
    <div className='event-details'>
      {guestList.map((participant, i) => {
        return (
          <div key={i}>
            <div>
              <p>Name: {participant.name}</p>
              <p>Wishlist: {participant.wishlist}</p>

              <div>
                <button onClick={() => handleDelete(participant.id)}>
                  Delete
                </button>
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
