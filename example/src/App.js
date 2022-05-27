import React from 'react'

import { Button } from 'cali-ui'
import 'cali-ui/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='Click' type='primary' onClick={() => alert('Test')} />
      <Button text='Click' type='default' onClick={() => alert('Test')} />
      <Button text='Click' type='dashed' onClick={() => alert('Test')} />
      <Button text='Click' type='text' onClick={() => alert('Test')} />
      <Button text='Click' type='link' onClick={() => alert('Test')} />
    </>
  )
}

export default App
