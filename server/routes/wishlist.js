// WISHLIST DATABASE //

import express from 'express'

import * as db from '../db/functions/wishlist.js'

const router = express.Router()

router.get('/', (req, res) => {
  db.getWishList()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

export default router
