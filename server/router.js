'use strict';

const router = require('express').Router();
const userControllers = require('./controllers/usersController');
const wishControllers = require('./controllers/wishesController');

// Users
router.get('/user', userControllers.getUsers);
router.post('/user', userControllers.createUser);
router.delete('/user/:id', userControllers.deleteUser);

// Wishes
router.get('/wishlist/:userId?', wishControllers.getWishes);
router.get('/wishlist/:userId/:id', wishControllers.getSpecificWish);
router.post('/wishlist', wishControllers.postWish);
router.delete('/wishlist/:id', wishControllers.deleteWish);

// Wishes & "Me"
router.get('/wishlist/:id', wishControllers.getWishesMe);
router.post('/wishlist/:id', wishControllers.postWishMe);



module.exports = router;