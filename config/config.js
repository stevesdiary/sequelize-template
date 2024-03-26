require('dotenv').config();
const dbConfig = require('./dbConfig')
module.exports = {
  "development": {
    "username": dbConfig.USERNAME,
    "password": dbConfig.PASSWORD,
    "database": dbConfig.DATABASE,
    "host": dbConfig.HOST,
    "dialect": dbConfig.DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
