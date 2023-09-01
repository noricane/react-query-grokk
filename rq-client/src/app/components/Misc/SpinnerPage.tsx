import React from 'react'
import styles from './Spinner.module.css'
const SpinnerPage = () => {
  return (

    <div className='h-screen w-screen flex justify-center items-center'>
        <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default SpinnerPage