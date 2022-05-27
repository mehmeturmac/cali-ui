import React from 'react'

import { Button } from 'cali-ui'
import 'cali-ui/dist/index.css'

const App = () => {
  return (
    <>
      <Button
        text='Primary Button'
        type='primary'
        onClick={() => alert('Primary Button')}
      />
      <Button
        text='Default Button'
        type='default'
        onClick={() => alert('Default Button')}
      />
      <Button
        text='Dashed Button'
        type='dashed'
        onClick={() => alert('Dashed Button')}
      />
      <Button
        text='Text Button'
        type='text'
        onClick={() => alert('Text Button')}
      />
      <Button
        text='Link Button'
        type='link'
        onClick={() => alert('Link Button')}
      />
    </>
  )
}

export default App
