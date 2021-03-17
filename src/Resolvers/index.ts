import Cars from '../Models/Cars';
import User from '../Models/Users'

export = {
    Query: {
        users: ()=>{
            return User.find();
        },
        // @ts-ignore
        user: (_, { id })=>{
            console.log(id)
            return User.find()
        },
        cars: ()=>{
            return Cars.find()
        }
    },
    Mutation: {
        // @ts-ignore
        createUser: (_, {name, email}) =>{
            return User.create({name, email})
        },
        // @ts-ignore
        createCar: (_, {name, model})=>{
            return Cars.create({
                name, model
            })
        }   
    }
}