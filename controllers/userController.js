const {User} = require('../models/User')

module.exports = {
  getUsers(req, res) {
    User.find()
    .then((users) => res.json(users))
    .cathc((err) => res.status(500).json(err))
  }
}