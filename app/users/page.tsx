import { notFound } from 'next/navigation'
import getUserList from '@/app/users/_api/getUserList'

export default async function Page() {
  const userList = await getUserList()

  if (userList.length === 0) {
    return notFound()
  }

  return (
    <section>
      <h1 className='text-2xl'>User一覧</h1>

      <div className='flex flex-col'>
        {userList.map((user) => (
          <div
            key={user.id}
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'
          >
            <div className='mb-4'>
              <p className='text-xl font-semibold'>{user.name}</p>
              <p className='text-gray-600'>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
