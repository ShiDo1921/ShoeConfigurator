import React from 'react'
import CanvasScene from '../components/CanvasScene'
import Options from '../components/Options'

const Home = () => {
  return (
    <div style={styles.main}>
        <div style={styles.template}>
            <Options />
            <CanvasScene />
        </div>
    </div>
  )
}

const styles = {
    main: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#178581'
    },
    template: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: window.innerWidth < 640 ? 'column' : 'row'
    }
}

export default Home