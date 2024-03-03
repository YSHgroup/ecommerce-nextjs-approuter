const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/next-ecommerce'

const connectDB = async () => {
  const client = MongoClient.connet(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  return client
}

module.exports = { connectDB }