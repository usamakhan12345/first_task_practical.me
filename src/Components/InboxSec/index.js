import React from 'react'
import styles from './inbox.module.css'
const inbox = () => {
  return (
    <>
        <div className={styles.inboxContainer}>
                <h1 >Deliciousness to your inbox</h1>
                <p>Be the first to know our latest offers & news</p>
                <div className={styles.subsBtnContainer}><input placeholder='Enter email address' className={styles.subscribeinput} /><button className={styles.subscribeBtn} >Subscribe</button></div>
        </div >
    </>
  )
}

export default inbox