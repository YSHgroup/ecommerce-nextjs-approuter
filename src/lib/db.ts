import { MongoClient, ObjectId } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGO_URI as string, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })

  return client
}


export function string2ObjectId(params:string) {
  return new ObjectId(params);
};