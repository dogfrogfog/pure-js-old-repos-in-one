import type { NextPage } from 'next'

import styles from '../styles/draw-on-canvas.module.css'

const DrawOnCanvasPage: NextPage = () => {
  return (
    <>
      <span className="notDone notWhite">Script is commented<br />.......again</span>
      <div className={styles.container}>
        <canvas id="draw" />
        <div className={styles.options}>
          <span>Width</span>
          <input type="range" className={styles.width} min="1" max="300" value="20" />
          <span>Color</span>
          <input type="color" className={styles.color} value="#00ffdd" />
          {/* <!-- <span>Opacity</span> --> */}
          {/* <!-- <input type="range" class="opacity" min="00" max="ff" value="ff"> --> */}
        </div>
      </div>
    </>
  )
}

export default DrawOnCanvasPage

// const canvas = document.querySelector('#draw');
// const context = canvas.getContext('2d');

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// context.lineCap = 'round';
// context.lineJoin = 'round';

// let isDraw = false;

// let startX = 0;
// let startY = 0;

// function drawing(e){
//     context.lineWidth = document.querySelector('.width').value;
//     context.strokeStyle = `${document.querySelector('.color').value}`;

//     if(isDraw){
//         context.beginPath();
//         context.moveTo(startX, startY)
//         context.lineTo(e.offsetX, e.offsetY);
//         context.stroke();
//     }
//     [startX, startY] = [e.offsetX, e.offsetY]
// }

