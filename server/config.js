
const DEV_DATABASE_URL="postgres://erin:<db_password>@127.0.0.1:5432/dev_db"
const TEST_DATABASE_URL="postgres://erin:erin@127.0.0.1:5432/test_db"

module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: 'postgres',
  }
  // production: {
  //   url: process.env.DATABASE_URL,
  //   dialect: 'postgres',
  // },
}