import React from 'react'
import { Picker } from './Picker'
import TextureImporter from './TextureImporter'

const Options = () => {
  return (
    <div style={styles.optionContainer}>
        <Picker />
        <TextureImporter />

    </div>
  )
}

const styles = {
    optionContainer: {
      width:  window.innerWidth < 640 ? '100%' : '40%',
      height: window.innerWidth < 640 ? '30%' : '100%',
      zIndex: 1,
      padding: '1rem'
    },

}

export default Options