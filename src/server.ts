import {GraphQLServer} from 'graphql-yoga'
import path from 'path'
import resolvers from './Resolvers'
import dbConnection from './Models/Connection'

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'Schemas/','schema.graphql'),
    resolvers
})

dbConnection.on('open', ()=>{
    server.start(()=>console.log('Server ON'));
})

