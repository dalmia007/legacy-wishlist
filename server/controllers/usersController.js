'use strict';

const db = require('../models/index');


const getUsers = async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.json(users);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await db.users.create({
      username: req.body.username,
      picture: req.body.picture
    });
    res.json(user);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await db.users.findOne({where: {id: req.params.id}})
    await user.destroy();
    res.json(user);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};


module.exports = { getUsers, createUser, deleteUser };