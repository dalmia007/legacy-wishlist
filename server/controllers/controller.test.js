const db = require('../models')
const request = require('supertest');
const app = require('../server');

  describe("Get Users", () => {  
    beforeAll(async () => {
      await db.sequelize.sync({ force: true, logging: false });
      const users=[1,2,3].map(u=>({username:`user${u}`,picture:`picture${u}`}))
      const user = await db.users.bulkCreate(users);
    })
    
    afterAll(async()=>{
      await db.sequelize.drop();
    })

    it("it should return correct status", async () => {
      const res = await request(app).get('/user');
      expect(res.status).toBe(200)
    });

    it("it should return all users", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      expect(users.length).toEqual(3)
    });

    it("it should return the first user", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      expect(users[0].username).toEqual('user1')
    });

  });


  describe("Create User", () => {  
    
  let data = {
    "id":4,
    "username": "user4",
    "picture": "picture4"
  }

    beforeAll(async () => {
      await db.sequelize.sync({ force: true, logging: false });
      const users=[1,2,3].map(u=>({username:`user${u}`,picture:`picture${u}`}))
      const user = await db.users.bulkCreate(users);
    })
    
    afterAll(async()=>{
      await db.sequelize.drop();
    })

    it("it should post a new user and return the correct status", async () => {
      await request(app)
        .post('/user')
        .send(data)
        .set('Accept', 'application/json')
        .expect(201)
    });
  
    it("it should return the correct number of users including the posted user", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      expect(users.length).toEqual(4)
    });
  
    it("it should return the posted user", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      expect(users[3].username).toEqual(data.username)
    });

});
  
describe("Delete User", () => {  

  let id = 3;

    beforeAll(async () => {
      await db.sequelize.sync({ force: true, logging: false });
      const users=[1,2,3].map(u=>({username:`user${u}`,picture:`picture${u}`}))
      const user = await db.users.bulkCreate(users);
    })
    
    afterAll(async()=>{
      await db.sequelize.drop();
      await db.sequelize.close();
    })

    it("it should delete a user and return the correct status", async (done) => {
      const deletedUser =await request(app)
        .delete(`/user/${id}`)
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.body.id).toEqual(id);
          expect(res.status).toEqual(200);
          done(); 
        })
    });
  
    it("it should throw an error if the deleted user doest not exist", async (done) => {
      const deletedUser =await request(app)
        .delete(`/user/${id+1}`)
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.status).toEqual(500);
          done(); 
        })
    });

    it("it should return the correct number of users not including the deleted user", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      expect(users.length).toEqual(2)
    });
  

  });