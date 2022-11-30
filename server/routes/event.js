// PARTICIPANTS PAGE//

import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello Event' })
})

export default router
