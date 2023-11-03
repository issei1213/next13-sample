export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className='text-2xl'>User一覧</h1>
      {children}
    </section>
  )
}
