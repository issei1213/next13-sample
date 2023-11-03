import Link from 'next/link'

export function Header() {
  return (
    <header className='bg-blue-500 text-white'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <span className='font-bold text-lg'>会社名</span>
        </div>
        <nav>
          <ul className='flex'>
            <li className='ml-6'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href='/' className='hover:text-gray-200'>
                home
              </Link>
            </li>
            <li className='ml-6'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href='users' className='hover:text-gray-200'>
                users
              </Link>
            </li>
            <li className='ml-6'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href='#' className='hover:text-gray-200'>
                会社情報
              </Link>
            </li>
            <li className='ml-6'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href='#' className='hover:text-gray-200'>
                コンタクト
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
