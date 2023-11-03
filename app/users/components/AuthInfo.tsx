'use client'

import { useAppContext } from '@/store/appContext'

export function AuthInfo() {
  const { state, setState } = useAppContext()
  const onClickButton = () => {
    setState((prevState) => {
      if (prevState.userId) {
        return {
          userId: undefined,
        }
      }

      return {
        ...prevState,
        userId: 'yamada',
      }
    })
  }

  return (
    <div>
      <p>ログイン状態: {state.userId ? 'ログイン中' : 'ログアウト中'}</p>
      <button type='button' onClick={onClickButton} className='bg-amber-400 p-2'>
        GlobalStateを更新
      </button>
    </div>
  )
}
