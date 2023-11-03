import { User } from '@/app/users/_types/user'

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export default async function getUserList(): Promise<User[]> {
  await sleep(1000)

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })

  return response.json()
}
