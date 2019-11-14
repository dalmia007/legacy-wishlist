"use strict";

const db = require("../models/index");

// Methods for all users

const getWishes = async (req, res) => {
  try {
    const userId = req.params.userId;
    let wishes;
    if (userId) {
      wishes = await db.wishes.findAll({ where: { userId: userId } });
    } else {
      wishes = await db.wishes.findAll();
    }
    res.json(wishes);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getSpecificWish = async (req, res) => {
  try {
    const userId = req.params.userId;
    const wishId = req.params.id;
    const wish = await db.wishes.findAll({ where: {userId: userId, id: wishId} });
    res.json(wish);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const postWish = async (req, res) => {
  try {
    const wish = await db.wishes.create(req.body);
    res.json(wish);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const deleteWish = async (req, res) => {
  try {
    const wish = await db.wishes.findOne({ where: { id: req.params.id } });
    await wish.destroy();
    res.json(wish);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

// Methods for "Me" User

const getWishesMe = async (req, res) => {
  try {
    const wishes = await db.wishes.findAll({ where: { userId: 1 } });
    res.json(wishes);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const postWishMe = async (req, res) => {
  try {
    const userId = req.params.id;
    const wishes = await db.wishes.create({ ...req.body, userId });
    res.json(wishes);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { getWishes, getSpecificWish, postWish, deleteWish, getWishesMe, postWishMe };
