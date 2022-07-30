import type { NextPage } from 'next'
import classnames from 'classnames'
import Image from 'next/image'

import styles from '../styles/whack-a-mole.module.css'

const WhatAMolePage: NextPage = () => {
  return (
    <>
      <span className="notDone notWhite">Script is commented</span>
      <h1>Whack-A-Picka: <span className={styles.count}>0</span> !</h1>

      <section className={styles.field}>
        <div className={classnames(styles.hole, styles.hole1)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole2)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole3)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole4)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole5)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole6)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole7)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole8)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImage} />
        </div>
        <div className={classnames(styles.hole, styles.hole9)}>
          <Image width={200} height={150} src={"/static/pika.png"} alt="pika" className={styles.mole} />
          <Image width={200} height={150} src="/static/molehill.png" alt="hole" className={styles.holeImg} />
        </div>
      </section>
    </>
  )
}

export default WhatAMolePage

// const holes = document.querySelectorAll('.hole');
// const moles = document.querySelector('.mole');
// const scoore = document.querySelector('.count');
// let lastHole;
// let counter = 0;

// function randomTime(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// } 

// function randomHole(holes) {
//     const idx = Math.round(Math.random() * 8 + 0);
//     const hole = holes[idx];
//     if(hole === lastHole) {
//         return randomHole(holes);
//     }
//     lastHole = hole;
//     return hole;
// }

// function moleMoveUp(holes) {
//     const timeout = randomTime(600, 2000);
//     const hole = randomHole(holes).querySelector('.mole');

//     hole.classList.add('active');
//     hole.addEventListener('click', increment);
//     scoore.innerHTML = counter;

//     setTimeout(() => {
//         hole.classList.remove('active');
//         hole.removeEventListener('click', increment);
//     }, timeout);
// }

// function increment() {
//     return counter++;
// }

// moleMoveUp(holes);
// setInterval(() => {
//     moleMoveUp(holes);
// }, 1000);
