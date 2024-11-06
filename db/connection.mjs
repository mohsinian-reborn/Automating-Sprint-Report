// import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from 'mongoose';
import 'dotenv/config';

class Mongo {
  async connect() {
    const user = process.env.MOGNODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URI;
    const databaseName = process.env.MONGODB_DATABASE;

    try {
      await mongoose.connect(
        `mongodb://${user}:${password}@${url}/${databaseName}?authSource=admin`,
      );
    } catch (err) {
      throw err;
    }

    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Database disconnected');
    });

    return mongoose.connection;
  }
}

export default new Mongo();

// const connectionURI = process.env.MONGODB_URI;

// const client = new MongoClient(connectionURI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   await client.connect();
//   await client.db('admin').command({ ping: 1 });
//   console.log('Pinged mongoDB successfully! Connected to DB');
// } catch (err) {
//   console.error(err);
// }

// let db = client.db('automatePRs');

// export default db;
