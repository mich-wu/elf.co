import { v4 as uuidv4 } from 'uuid'

import {
  createEvent,
  getEvent,
  getEventById,
  getEvents,
  updateStatus,
} from '../db/functions/events.js'
import { getGuestsByEventId } from '../db/functions/events.js'
import { updateWishlistGifter } from '../db/functions/guest.js'

export default {
  getEvents: async (req, res) => {
    const events = await getEvents()
    res.json(events)
  },
  getEvent: async (req, res) => {
    const { event_id } = req.params

    const event = await getEvent(event_id)
    res.json(event)
  },

  createEvent: async (req, res) => {
    try {
      const eventData = req.body

      eventData.invite_id = uuidv4()

      const newEventObj = await createEvent(eventData)

      const fullEventInfo = await getEventById(newEventObj)

      res.status(201).json(fullEventInfo)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  updateStatus: async (req, res) => {
    const { event_id } = req.params

    const event = await updateStatus(event_id)

    res.json(event)
  },
  assignGifters: async (req, res) => {
    const { event_id } = req.params

    const event = await getGuestsByEventId(event_id)

    // const shuffle = (array) => {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1))
    //     let temp = array[i]
    //     array[i] = array[j]
    //     array[j] = temp
    //   }

    //   return array
    // }

    // const assign = (array) => {
    //   const shuffledArray = shuffle(array)
    //   const assignments = shuffledArray.map((participant, i) => {
    //     return {
    //       id: participant.id,
    //       gifter_id:
    //         i === shuffledArray.length - 1
    //           ? shuffledArray[0].id
    //           : shuffledArray[i + 1].id,
    //       guest_code: participant.guest_code,
    //     }
    //   })

    //   return assignments
    // }

    const assign = (array) => {
      // Shuffle the array in place
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }

      // Calculate assignments
      const assignments = []
      for (let i = 0; i < array.length; i++) {
        assignments.push({
          id: array[i].id,
          gifter_id: array[(i + 1) % array.length].id,
          guest_code: array[i].guest_code,
        })
      }

      return assignments
    }

    const assignments = assign(event)

    const updateAssignments = async (assignments) => {
      for (let i = 0; i < assignments.length; i++) {
        await updateWishlistGifter(assignments[i])
      }
    }

    updateAssignments(assignments)

    const updatedEvent = await getGuestsByEventId(event_id)
    res.json(updatedEvent)
  },
}
