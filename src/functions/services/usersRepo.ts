import { db } from '@/lib/connectDB'
import bcrypt from 'bcryptjs'
import {headers} from 'next/headers'

const User = db.User

export const create = async (params: any) => {
  if(await User.findOne({email: params.newUser.email})) {
    return {error: `Email ${params.newUser.email} is already taken`}
    throw `Email ${params.newUser.email} is already taken`
  }
  const newUser = new User(params.newUser)
  // console.log('repo-newUser-->', newUser)
  
  if(params.newUser.password) {
    newUser.hash = bcrypt.hashSync(params.newUser.password, 10)
  }
  console.log('repo-params-->', newUser)

  // User.findOne({email: params.email}).then(() => {throw 'This email is already taken.'}).catch(() => {
  //   newUser.hash = bcrypt.hash(params.password, 10)
  //   newUser.save()
  // })
  
  return newUser.save().then(( result: any ) => result).catch((err: Error)=> err)
}