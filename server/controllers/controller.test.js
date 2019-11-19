const db = require('../models')
const request = require('supertest');
const app = require('../server');

  describe("user", () => {  
    beforeAll(async () => {
      await db.sequelize.sync({ force: true, logging: false });
      const users=[1,2,3].map(u=>({username:`user${u}`,picture:`picture${u}`}))
      const user = await db.users.bulkCreate(users);
    })
    
    afterAll(async()=>{
      await db.sequelize.drop();
      await db.sequelize.close();
    })

    it("it should return all users", async () => {
      const res = await request(app).get('/user');
      const users = res.body;
      // expect(res.status).toBe(200)
      expect(users.length).toEqual(3)
      expect(users[0].username).toEqual('user1')
    });

  });
