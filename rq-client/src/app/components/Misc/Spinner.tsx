import React from 'react'
import styles from './Spinner.module.css'
const Spinner = ({className="",error}:{className?:string,error:boolean}) => {
  return (  
        <div className={`${styles.ldsRing} ${error ? styles.ldsRingError : styles.ldsRingNoError}`}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner