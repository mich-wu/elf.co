// WISHLIST DATABASE //

import express from 'express'

import * as db from '../db/functions/wishlist.js'

const router = express.Router()

router.get('/', (req, res) => {
  db.getWishlist()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const wish = req.body
  db.createWishlist(wish)
    .then(() => {
      return db.getWishlist()
    })
    .then((updatedWishlist) => {
      res.json(updatedWishlist)
    })
    .catch((err) => console.error(err.message))
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const wish = req.body
  db.updatedWishlist(id, wish)
    .then(() => {
      return db.getWishlist()
    })
    .then((wishlist) => {
      res.json(wishlist)
    })
    .catch((err) => {
      console.error(err.message)
      res
        .status(500)
        .json({ message: 'Something went wrong with the patch route' })
    })
})
export default router
