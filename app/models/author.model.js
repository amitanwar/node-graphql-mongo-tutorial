let mongoose = require('mongoose');

let authorSchema = mongoose.Schema({
  name: String,
  phoneNo: Number,
  email: String,
  address: String,
});

module.exports = mongoose.model('Author', authorSchema);
