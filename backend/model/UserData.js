const mongoose = require('mongoose');
const UserDataSchema = new mongoose.Schema({
    city:{
        type: String,
    },
    Orderdate :{
        type : String
    },
  
      Category :{
        type:String
    },
    OrderDay:{
        type:String
    }
},timestamp=true);


const UserDataModel = mongoose.model('userdata', UserDataSchema);
module.exports = UserDataModel;


