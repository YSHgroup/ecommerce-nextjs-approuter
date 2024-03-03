import NextAuth from "next-auth/next";
import type { User } from 'next-auth';
import {db} from '@/lib/connectDB'
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/auth";

const User = db.User
const handler = NextAuth({
  // pages: {
  //   signIn: "/auth/signin",
  // },
  // session: {
  //   jwt: true,
  // },
  providers: [
    CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email", placeholder: "user@gmail.com", require},
      password: { label: "Password", type: "password", require }
    },
    async authorize(credentials, req) {
      // try {
        const {_id: id, username: name, hash: hashedPassword, email } = await User.findOne({email: credentials?.email})
        // console.log('credentials--> ', credentials, 'request-->', email, id.toString())
        // console.log('test-ID-->', await User.findById({_id: id}))
        console.log('user-credential->',await verifyPassword(credentials!.password, hashedPassword))
        if(!await verifyPassword(credentials!.password, hashedPassword)) {
          console.log('this-error-->',!verifyPassword(credentials!.password, hashedPassword))
          throw new Error('Email or Password is incorrect')
        }
        const user: User = { id: id, name: name, email: email}
        return user
        
      // } catch(err){
      //   throw err + '--- In nextauth'
      // }
      
      // if (user) {
      //   return user
      // } else {
      //   return null
      // }
    }
  })
  ],
})

export { handler as GET, handler as POST };