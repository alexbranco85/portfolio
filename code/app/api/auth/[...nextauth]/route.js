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
        console.log('user', user)

        if(user && response.ok){
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }