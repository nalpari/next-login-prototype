import { auth, signOut } from '@/auth'
import { logout } from '@/lib/actions'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function Home() {
  const session = await auth()

  return (
    <>
      <div>
        <Link href="/login">
          <Button>LOGIN</Button>
        </Link>
      </div>

      <div>
        <form action={logout}>
          <Button type="submit">LOGOUT</Button>
        </form>
      </div>

      {session && <div>{JSON.stringify(session)}</div>}
    </>
  )
}
