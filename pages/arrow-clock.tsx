import { useEffect, useRef, RefObject } from 'react'
import type { NextPage } from 'next'

import styles from '../styles/arrow-clock.module.css'

// refactored.......time cant wait
type RT = RefObject<HTMLDivElement>

const setDate = (hoursRef: RT, minutesRef: RT, secondsRef: RT) => {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  if (hoursRef) {
    hoursRef.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = date.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minutesRef.style.transform = `rotate(${minutesDegrees}deg)`;


    const hours = date.getHours();
    const hoursDegrees = (hours / 24) * 360 + 90;
    secondsRef.style.transform = `rotate(${hoursDegrees}deg)`;
  }
}

const ArrowClockPage: NextPage = () => {
  const hoursRef = useRef<HTMLDivElement>(null)
  const minutesRef = useRef<HTMLDivElement>(null)
  const secondsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(hoursRef.current, minutesRef.current, secondsRef.current)
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [hoursRef, minutesRef, secondsRef])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>
          <div ref={hoursRef} className={styles.hand} id="hours"></div>
          <div ref={minutesRef} className={styles.hand} id="minutes"></div>
          <div ref={secondsRef} className={styles.hand} id="seconds"></div>
        </div>
      </div>
    </>
  )
}

export default ArrowClockPage
