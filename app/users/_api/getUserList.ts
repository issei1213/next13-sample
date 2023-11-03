import { User } from '@/app/users/_types/user'

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export default async function getUserList(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })

  await sleep(1000)

  const users = await response.json()

  console.log('users', users.length)

  return users

  // return response.json()
}
