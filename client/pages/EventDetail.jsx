import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  assignGifter,
  deleteGuest,
  getAllParticipants,
  getEvent,
  updateEventStatus,
} from '../apiClient/event.js'

const EventDetail = () => {
  const { event_id } = useParams()
  const [guestList, setGuestList] = useState([])
  const [assigned, setAssigned] = useState(null)

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
  }, [assigned])

  useEffect(() => {
    getEvent(event_id).then((event) => {
      setAssigned(event.status)
    })
  }, [assigned])

  useEffect(() => {
    const getEventStatus = async () => {
      const event = await getEvent(event_id)
    }
    getEventStatus()
  }, [assigned])

  async function handleDraw(event) {
    event.preventDefault()

    const assignments = await assignGifter(event_id)

    setGuestList(assignments)

    const updatedStatus = await updateEventStatus(event_id)

    setAssigned(updatedStatus.status)
  }

  const findGifter = (gifter_id) => {
    const gifter = guestList.find((participant) => participant.id === gifter_id)

    return gifter?.name
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
