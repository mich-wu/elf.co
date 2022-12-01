// WISHLIST DATABASE //

import express from 'express'

import * as db from '../db/functions/guest.js'

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

//id is 'guest_code' in the 'wishlist' db table
router.get('/:id', (req, res) => {
  console.log('hit get by id')
  const id = req.params.id
  db.getWishlistById(id)
    .then(() => {
      return db.getWishlistById(id)
    })
    // lines 23-25 are not needed
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
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
  console.log('hit patch in wishlist')
  const id = req.params.id
  const wish = req.body
  console.log(id, wish, 'id and wish')
  db.updatedWishlist(id, wish)
    .then(() => {
      return db.getWishlistById(id)
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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteWishlist(id)
    .then(() => {
      return db.getWishlist()
    })
    .then((guest) => {
      res.json(guest)
    })
    .catch((err) => {
      console.error(err.message)
      res
        .status(500)
        .json({ message: 'Something went wrong with the delete route' })
    })
})

// Create a function here and in db to filter the guests down - don't want on front end for security concerns

export default router
