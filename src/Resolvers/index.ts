import Cars from '../Models/Cars';
import User from '../Models/Users'

type ICar = {
    name: String;
    model: Number;
}
type IUser = {
    name: String;
    email: String
}

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
        createUser: (context: any, {name, email}:IUser) =>{
            return User.create({name, email})
        },
        createCar: (context: any, {name, model}:ICar)=>{
            return Cars.create({
                name, model
            })
        }   
    }
}