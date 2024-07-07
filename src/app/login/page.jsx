'use client'

import { useState } from 'react'
import { login } from '@/lib/actions'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  // const router = useRouter()
  // const { data: session } = useSession()
  // if (session) router.push('/')

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  // 추후에 추가될 로그인 메소드
  // const [errorMsg, dispatch] = useFormState(authenticate, undefined)
  const handleIdChange = (e) => setId(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form className="flex flex-col" action={login}>
        <input
          className="bg-blue-300 text-black"
          name="id"
          value={id}
          onChange={handleIdChange}
        />
        <input
          className="bg-yellow-300 text-black"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>로그인</button>
        {/* <p>{errorMsg}</p> */}
      </form>
    </div>
  )
}
