var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new ({
   imagePath: {type: String, require: true}, 
    title:{type: String, required:true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
}); 

model.exports = mongoose.model('Product', schema);