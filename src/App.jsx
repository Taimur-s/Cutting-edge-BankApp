import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overfow-hidden'>
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          Navbar
        </div>
      </div>
    </div>
  )
}

export default App
