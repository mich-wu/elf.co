// PARTICIPANTS PAGE//

import express from 'express'
const router = express.Router()
import {
  createEvent,
  getEvent,
  getEvents,
  updateStatus,
} from '../db/functions/events.js'
import * as db from '../db/functions/guest.js'

router.get('/dashboard', async (req, res) => {
  const events = await getEvents()
  res.json(events)
})

router.get('/dashboard/:event_id', async (req, res) => {
  const { event_id } = req.params
  const event = await getEvent(event_id)
  res.json(event)
})

router.post('/', async (req, res) => {
  try {
    const newEvent = await createEvent(req.body)
    res.status(200).json(newEvent)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.patch('/dashboard/:event_id', (req, res) => {
  const { event_id } = req.params

  updateStatus(event_id)
    .then(() => {
      return getEvent(event_id)
    })
    .then((event) => {
      console.log(event.status, 'status in db')
      res.json(event.status)
    })
    .catch(console.error)
})

export default router
