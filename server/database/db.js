import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-otnceax-shard-00-00.ezfjebr.mongodb.net:27017,ac-otnceax-shard-00-01.ezfjebr.mongodb.net:27017,ac-otnceax-shard-00-02.ezfjebr.mongodb.net:27017/?ssl=true&replicaSet=atlas-14dqzv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;