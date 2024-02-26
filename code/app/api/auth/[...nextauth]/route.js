import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        login: { label: 'login', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            login: credentials?.login,
            password: credentials?.password
          })
        })

        const user = await response.json();

        if(user && response.ok){
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      
      if (user) {
        return {
          ...token,
          ...user,
        }
      }
      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        token: token.token
      }
    }
  },
  session: {
    maxAge: 10 * 60, // 10 minutes in seconds
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }