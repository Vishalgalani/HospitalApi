const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const hospitalSchema = new Schema({
  hospitalname : String,
  hospitaladdress : String,
  description : String,
  openingtime : String,
  closingtime : String, 
  shortdescription : String, 
  category : [String],
  service : [String],
  hospitallogo : String,
  status : {
    type : String,
    enum : ['Pubish' , 'Draft'],
    default : 'Pubish'
  }
});

const HOSPITAL = mongoose.model('hospital', hospitalSchema);

module.exports = HOSPITAL;