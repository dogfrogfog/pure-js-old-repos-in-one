import type { NextPage } from 'next'

import styles from '../styles/edm.module.css'

const buttons: { dataKey: string, key: string, sound: string }[] = [
  {
    dataKey: '97',
    key: 'A',
    sound: 'CLAP',
  },
  {
    dataKey: '115',
    key: 'S',
    sound: 'HIHAT',
  },
  {
    dataKey: '100',
    key: 'D',
    sound: 'KICK',
  },
  {
    dataKey: '102',
    key: 'F',
    sound: 'OPENHAT',
  },
  {
    dataKey: '103',
    key: 'G',
    sound: 'RIDE',
  },
  {
    dataKey: '104',
    key: 'H',
    sound: 'SNARE',
  },
  {
    dataKey: '106',
    key: 'J',
    sound: 'TOM',
  },
  {
    dataKey: '107',
    key: 'K',
    sound: 'TINK',
  },
  {
    dataKey: '108',
    key: 'L',
    sound: 'DOM',
  },

]

{/* <audio src="sounds/clap.wav" data-key="97"></audio>
<audio src="sounds/hihat.wav" data-key="115"></audio>
<audio src="sounds/kick.wav" data-key="100"></audio>
<audio src="sounds/openhat.wav" data-key="102"></audio>
<audio src="sounds/boom.wav" data-key="103"></audio>
<audio src="sounds/ride.wav" data-key="104"></audio>
<audio src="sounds/snare.wav" data-key="106"></audio>
<audio src="sounds/tom.wav" data-key="107"></audio>
<audio src="sounds/tink.wav" data-key="108"></audio> */}

const EDMPage: NextPage = () => {
  return (
    <>
      <span className={styles.notDone}>Sound doesnt work</span>
      <div className={styles.container}>
        {buttons.map(({ dataKey, key, sound }) => (
          <a href="#" className={styles.button} key={key} data-key={dataKey}>
            <kbd className={styles.key}>{key}</kbd>
            <span className={styles.sound}>{sound}</span>
          </a>
        ))}
      </div>
    </>
  )
}

export default EDMPage
