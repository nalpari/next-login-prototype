'use server'

import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

export async function authenticate(prevState, formData) {
  try {
    const result = await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      return '로그인 실패'
    }
    throw error
  }
}

export async function login(data) {
  const result = await signIn('credentials', {
    id: data.id,
    password: data.password,
    redirectTo: '/',
  })
}

export async function logout() {
  await signOut({ redirectTo: '/login' })
}
