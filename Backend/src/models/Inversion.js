import mongoose from 'mongoose'
const Schema = mongoose.Schema

const inversionSchema = new Schema({
    name: {
        type: String,
        trim : true
    },
    amount: {
        type: Number, 
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Inversion', inversionSchema)