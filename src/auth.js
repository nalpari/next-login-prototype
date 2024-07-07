import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import Credentials from 'next-auth/providers/credentials'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials.id && credentials.password) {
          // 백엔드에서 로그인 처리
          // let loginRes = await backendLogin(credentials.id, credentials.password)
          let loginRes = {
            success: true,
            data: {
              user: {
                ID: 'user1',
                NAME: '홍길동',
                EMAIL: 'email@email.email',
              },
            },
          }
          // 로그인 실패 처리
          if (!loginRes.success) return null
          // 로그인 성공 처리
          const user = {
            id: loginRes.data.user.ID ?? '',
            name: loginRes.data.user.NAME ?? '',
            email: loginRes.data.user.EMAIL ?? '',
          }
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = token.user
      return session
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user
      }
      return token
    },
  },
})
