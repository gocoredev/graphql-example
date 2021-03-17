import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
    useNewUrlParser: true
})

const dbConnection = mongoose.connection

export default dbConnection

