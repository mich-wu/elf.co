import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  assignGifter,
  deleteGuest,
  getAllParticipants,
  getEvent,
  updateEventStatus,
} from '../apiClient/event.js'

// TODO: Refactor filterParticipants and findGifter to the backend

const EventDetail = () => {
  const { event_id } = useParams()
  const [guestList, setGuestList] = useState([])
  const [assigned, setAssigned] = useState(null)

  const filterParticipants = (participants) => {
    return participants.filter(
      (participant) => participant.event_id == event_id
    )
  }

  const findGifter = (gifter_id) => {
    const gifter = guestList.find((participant) => participant.id === gifter_id)

    return gifter?.name
  }

  const handleDelete = async (guest_id) => {
    const participants = await deleteGuest(guest_id)
    const newList = filterParticipants(participants)
    setGuestList(newList)
  }

  useEffect(() => {
    const fetchData = async () => {
      const participants = await getAllParticipants()
      const newList = filterParticipants(participants)
      const event = await getEvent(event_id)
      setGuestList(newList)
      setAssigned(event.status)
    }
    fetchData()
  }, [assigned])

  async function handleDraw(event) {
    event.preventDefault()

    const assignments = await assignGifter(event_id)

    setGuestList(assignments)

    const updatedStatus = await updateEventStatus(event_id)

    setAssigned(updatedStatus.status)
  }

  return (
    <div className='event-details'>
      {assigned ? (
        guestList.map((participant, i) => {
          return (
            <div key={i}>
              <div>
                <p>Name: {participant.name}</p>
                <p>Wishlist: {participant.wishlist}</p>
                <p>Gifter: {findGifter(participant.gifter_id)}</p>

                <div>
                  <button onClick={() => handleDelete(participant.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div>
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
      )}
    </div>
  )
}

export default EventDetail
