import type { NextPage } from 'next'

import styles from '../styles/video-player.module.css'

const Home: NextPage = () => {
  return (
    <>
      <span className="notDone">Video tag is commented</span>
      <div className={styles.container}>
        <section>
          {/* file is in static folder */}
          {/* <video src="video.mp4"></video> */}
          <div className={styles.progress}>
            <div className={styles.progressInner}></div>
          </div>
          <div className={styles.controls}>
            <div className={styles.bottomControls}>
              <div className={styles.play}>
                <span>►</span>
              </div>
              <div className={styles.volume}>
                <div>-</div>
                <input type="range" min="0" max="1" step="0.01" value="0.5" />
                <div>+</div>
              </div>
              <div className={styles.speed}>
                <span>0.25x</span>
                <input type="range" min="0.25" max="2" step="0.25" value="1" />
                <span>2x</span>
              </div>
              <div className={styles.skip}>
                <button className={styles.ten}>10</button>
                <button className={styles.twentyfive}>25</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
