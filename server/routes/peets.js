import express from 'express'
const router = express.Router()
import * as db from '../db/functions/guest.js'


router.get('/', (req, res) => {
  db.getPeets()
    .then((peetsdata) => {
      res.json(peetsdata.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})
export default router