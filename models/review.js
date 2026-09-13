const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    reviewTitle: {
        type: String
    },
    reviewBody: {
        type: String
    },
    creator: {//reference the User model.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review