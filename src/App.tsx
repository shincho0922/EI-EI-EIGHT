import { FC, useEffect } from 'react'

import { test } from './scripts/lib/api'

const App: FC = () => {
  // * test
  useEffect(() => {
    test()
  }, [])

  return <div className="App">EI-EI-EIGHT</div>
}

export default App