import { connectDB } from './connect-db'

export async function assembleUserState(user){
    let db = await connectDB();
    let users = [
        await db.collection(`users`).findOne({id:user.id}),
        ...await db.collection(`users`).find({id:{$in:[...tasks,comments].map(x=>x.owner)}}).toArray()
    ];

    return {
        session:{authenticated:`AUTHENTICATED`,id:user.id},
        groups:await db.collection(`groups`).find({owner:user.id}).toArray(),
        users,
        dogs:await db.collection(`dogs`).find({owner:user.id}).toArray()
    };
}
