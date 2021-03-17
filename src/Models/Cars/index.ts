import mongoose from 'mongoose'

const CarsSchema = new mongoose.Schema({
    name: String,
    model: Number,
    releaseDate: Date
})

export default mongoose.model('Cars', CarsSchema)