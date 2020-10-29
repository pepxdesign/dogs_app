import { connectDB } from './connect-db'

export const updateDog = async dog=>{
    let {id,name, age, breed} = dog;
    let db = await connectDB();
    let collection = db.collection(`dogs`);
    if (name) {
        await collection.updateOne({id},{$set:{name}});
    }
    if (age) {
        await collection.updateOne({id},{$set:{age}});
    }
    if (breed) {
        await collection.updateOne({id},{$set:{breed}});
    }
};
