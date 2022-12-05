import express from 'express'
const router = express.Router()
import * as db from '../db/functions/peets.js'

router.get('/', (req, res) => {
  db.getPeets()
    .then((peetsdata) => {
      res.json(peetsdata)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

// ADD /api/v1/peets/:id
// router.post('/', (req, res) => {
//   const newPeet = req.body.name
//   db.addPeets(newPeet)
//     .then(() => {
//       return db.getPeet()
//     })
//     .then((newPeet) => {
//       return res.json(newPeet)
//     })
//     .catch((err) => console.error(err.message))
// })

export default router
