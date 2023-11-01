import NextAuth from "next-auth/next";
import type { User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

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
      const user: User = { id: 1, name: "J Smith", email: "jsmith@example.com" }
      console.log('credentials--> ', credentials, 'request-->', req);
      
      if (user) {
        return user
      } else {
        return null
      }
    }
  })
  ],
})

export { handler as GET, handler as POST };