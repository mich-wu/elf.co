// WISHLIST DATABASE //

import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello Guest' })
})

export default router
