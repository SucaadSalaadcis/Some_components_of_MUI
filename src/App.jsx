import React from 'react'
import AutocompleteEx from './components/AutocompleteEx'
import ButtonsEx from './components/ButtonsEx'
import CheckBoxEx from './components/CheckBoxEx'


export default function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>

      <AutocompleteEx />
      <ButtonsEx />
      <CheckBoxEx />
    </div>
  )
}

