const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String, 
      unique: true,
      required: true,
   
    },
    email: {
      type: String,
      required: true, 
      unique: true,
      match: 
    },
    thougts: [{
      
    }],
    friends: [{

    }]
  }
)