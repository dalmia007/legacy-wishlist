


const fetch = require('node-fetch')
const db = require('../models')
  describe("user", () => {  
    beforeAll(async()=>{
      const users=[1,2,3].map(u=>({username:`user${u}`,picture:`picture${u}`}))
      
      const user = await db.users.bulkCreate(users);
      // await db.users.destroy( {where: {}});

    })
    afterAll(async()=>{
      await db.users.destroy( {where: {}});

    })
    it("it returns all users", async (done) => {
      let users = await fetch('http://localhost:5000/user')
      users = await users.json()
      console.log(users);
      
      done()
      
    });
    // it("should return all users in the db", async () => {
    //   Users.findAll.mockResolvedValue(Users);
    //   await controllers.getUsers(req, res);
    //   expect(res.send).toHaveBeenCalledWith(Users);
    // });
    // it("should set correct error status", async () => {
    //   Users.findAll.mockRejectedValue(new Error('Async error'));
    //   await controllers.getUsers(emptyBody, res)
    //   expect(res.status).toHaveBeenCalledWith(500)
    // });
  });











  // jest.mock('/Users/erincostello/Desktop/wish/legacy-wishlist/server/controllers/__mocks__/conUser.js');

  // import * as user from '../user';

  // // The assertion for a promise must be returned.
  // it('works with promises', () => {
  //   expect.assertions(1);
  //   return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
  // });

  // const fakeModels = require("../models/user");
  // const controllers = require("./usersController");
  // //const Userz = require('./__mocks__/Userz')

  // // jest.mock("./models");


  // const req = {
  //   body: {
  //     username: "user_name",
  //   }
  // };

  // const res = {
  //   sendStatus: jest.fn(),
  //   status: jest.fn()
  // };

  // const Users = {
  //   1: {username: ['erin']},
  //   2: {username: ['anu']},
  //   3: {username: ['kanye']}
  // };






  // const fakeUsers = { username: ["users"] };
  // // const fakePlaces = { places: ["places"] };
  // // const fakeVote = {};
  // const emptyBody = {};


  // ///GET

  // describe("getUsers", () => {
  //   it("should set correct success status", async () => {
  //     await controllers.getUsers(req, res);
  //     expect(res.status).toHaveBeenCalledWith(200);
  //   });
  //   it("should return all users in the db", async () => {
  //     Users.findAll.mockResolvedValue(Users);
  //     await controllers.getUsers(req, res);
  //     expect(res.send).toHaveBeenCalledWith(Users);
  //   });
  //   it("should set correct error status", async () => {
  //     Users.findAll.mockRejectedValue(new Error('Async error'));
  //     await controllers.getUsers(emptyBody, res)
  //     expect(res.status).toHaveBeenCalledWith(500)
  //   });
  // });


  ///POST

  // describe("createUser", () => {
  //   it("should set correct success status", async () => {
  //     await controllers.createUser(req, res);
  //     expect(res.status).toHaveBeenCalledWith(200);
  //   });
  //   it("should create a user in the db", async () => {
  //     Users.create.mockResolvedValue(fakeUsers);
  //     await controllers.createUser(req, res);
  //     expect(res.send).toHaveBeenCalledWith(fakeUsers);
  //   });
  //   it("should set correct error status", async () => {
  //     Users.findAll.mockRejectedValue(new Error('Async error'));
  //     await controllers.createUser(emptyBody, res)
  //     expect(res.status).toHaveBeenCalledWith(500)
  //   });
  // });


  ///DELETE

  // describe("deleteUser", () => {
  //   it("should set correct success status", async () => {
  //     await controllers.deleteUser(req, res);
  //     expect(res.status).toHaveBeenCalledWith(204);
  //   });
  //   it("should delete a user in the db", async () => {
  //     fakeModels.Userz.create.mockResolvedValue(fakeUsers);
  //     await controllers.createUser(req, res);
  //     expect(res.send).toHaveBeenCalledWith(fakeUsers);
  //   });
  //   it("should set correct error status", async () => {
  //     fakeModels.Userz.findAll.mockRejectedValue(new Error('Async error'));
  //     await controllers.createUser(emptyBody, res)
  //     expect(res.status).toHaveBeenCalledWith(500)
  //   });
  // });