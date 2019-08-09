const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.unlikes } },
      ],
    })

    return res.json(users)
  },

  async store(req, res) {
    const { username } = req.body;
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    const { name, bio, avatar_url: avatar } = data
    console.log(data)
    const userExists = await Dev.findOne({ user: username });
    if(userExists) return res.json(userExists);
    const dev = await Dev.create({ 
      name,
      user: username,
      avatar,
      bio,
     })

    return res.json(dev);
  }
}