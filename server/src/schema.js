//jest.useFakeTimers()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DBURl = 'mongodb+srv://Elshazly:Elshazly2@cluster0.q7cot.mongodb.net/ItemsPrice?retryWrites=true&w=majority'
mongoose.connect(DBURl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to the database'),)
    .catch((err) => console.log(err))




const ProductSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }



});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
