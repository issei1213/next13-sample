import type { ReactNode } from 'react'
import { Footer, Header } from '@/app/_components/navigation'

export default function JobsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <main className='container mx-auto mt-8'>{children}</main>
      <Footer />
    </div>
  )
}
