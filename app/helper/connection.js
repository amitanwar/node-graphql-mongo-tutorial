const mongoose = require('mongoose'),
  _ = require('lodash');

class Connection {
  constructor() {
    this._connect();
  }

  _connect = () => {
    // Connection URL
    const url = process.env.DB_URI;

    // Database Name
    const dbName = process.env.DB_NAME;

    if (_.isEmpty(url)) throw new Error('URI is missing');

    if (_.isEmpty(dbName)) throw new Error('Db Name is missing');

    // Use connect method to connect to the Server
    mongoose
      .connect(`${url}/${dbName}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  };
}

module.exports = new Connection();
