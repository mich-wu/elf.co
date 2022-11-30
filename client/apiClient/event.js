import request from 'superagent'

const baseUrl = '/api'

export const createEvent = async (event) => {
  console.log(event, 'hit create event')
  const res = await request.post(`${baseUrl}/event`).send(event)
  return res.body
}

export const getEvent = async (event_id) => {
  const response = await fetch(`${baseUrl}/event/dashboard/${event_id}`)
  const event = await response.json()
  return event[0]
}

export async function getEvents() {
  const res = await request.get(`${baseUrl}/event/dashboard`)
  return res.body
}
export function getAllParticipants() {
  return request.get('/api/v1/wishlist').then((res) => {
    return res.body
  })
}
