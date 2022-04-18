import TxList from '@/components/transactions/TxList'
import type { NextPage } from 'next'
import { useAppDispatch } from '@/store'
import { setPageUrl } from '@/store/txHistorySlice'
import useTxHistory from '@/services/useTxHistory'

const preventDefault = (fn: () => void): ((e: React.SyntheticEvent) => void) => {
  return (e) => {
    e.preventDefault()
    fn()
  }
}

const History: NextPage = () => {
  const { page, pageUrl } = useTxHistory()
  const dispatch = useAppDispatch()

  const onPageChange = (url?: string) => {
    dispatch(setPageUrl(url))
  }

  const onNext = preventDefault(() => {
    onPageChange(page.next)
  })

  const onPrev = preventDefault(() => {
    onPageChange(page.previous)
  })

  const onFirst = preventDefault(() => {
    onPageChange(undefined)
  })

  return (
    <main>
      <h2>Transaction History</h2>

      <button onClick={onFirst} disabled={!pageUrl}>
        Go to first page
      </button>
      <button onClick={onPrev} disabled={!page.previous}>
        ← Previous page
      </button>
      <button onClick={onNext} disabled={!page.next}>
        Next page →
      </button>

      <TxList items={page.results} />
    </main>
  )
}

export default History