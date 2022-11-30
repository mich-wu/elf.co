import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello Host' })
})

export default router
