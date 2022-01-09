//jest.useFakeTimers()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DBURl = 'mongodb+srv://Elshazly:Elshazly2@cluster0.q7cot.mongodb.net/ItemsPrice?retryWrites=true&w=majority'
mongoose.connect(DBURl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to the database'),)
    .catch((err) => console.log(err))




const ProductSchema = new Schema({
    Name: {
        type: String,
        required: false
    },
    Price: {
        type: String,
        required: false
    }



});


const HerosSchema = new Schema({
    Name: {
        type: String,
        required: true
    }

});



const Hero = mongoose.model('Hero', HerosSchema);
module.exports = Hero;




const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
