import mongoose from "mongoose";

const Schema = mongoose.Schema

mongoose.connect(process.env.MONGO_URI!).then(() => console.log('Connect success')).catch((err: Error) => console.log({ 'connect': err }))
mongoose.Promise = global.Promise
export const db = {
  User: userModel()
}

function userModel() {

  const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    hash: { type: String, required: true },
  }, {
    timestamps: true
  })

  userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret, options) {
      delete ret._id
      delete ret.hash
    },
  })

  return mongoose.models.User || mongoose.model('User', userSchema)
}