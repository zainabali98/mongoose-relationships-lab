const mongoose = require('mongoose')


const listingSchema = new mongoose.Schema({
    streetAddress: {
        type: String
    },
    city: {
        type: String
    },
    price: {
        type: Number
    },
    size: {
        type: Number
    },
    owner: {//reference the User model.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {//reference the Category model.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing