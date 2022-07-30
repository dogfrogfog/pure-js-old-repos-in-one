import type { NextPage } from 'next'

import styles from '../styles/code-jam-image-api.module.css'

const CodeJamImageApiPage: NextPage = () => {
  return (
    <>
      <span className="notDone notWhite">Big script is commented<br />Feel free to open PRs<br />Potentialy nice page with images as i may see</span>
      <div className={styles.container}>
        <div className={styles.options}>
          <span>Width</span>
          <input type="range" className={styles.width} min="1" max="300" value="20" />
          <span>Color</span>
          <input type="color" className={styles.color} value="#00ffdd" />
        </div>

        <div className={styles.paintingArea}>
          <div className={styles.imageUpload}>
            <button className={styles.buttonLoad}>Load</button>
            <input type="text" className={styles.searchCity} placeholder="City name" />
            <a className={styles.buttonDownload} download="canvas-city.png">Download</a>
            <button className={styles.buttonBnw}>B & W</button>
          </div>
          <canvas id="draw"></canvas>
          {/* <!-- <div className="image-size">
                <span>Размер изображения</span>
                <input type="range" min='1' max='70'>
              </div> --> */}
        </div>
      </div>
    </>
  )
}

export default CodeJamImageApiPage

// const canvas = document.querySelector('#draw');
// const context = canvas.getContext('2d');

// canvas.height = 500;
// canvas.width = 700;

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

// canvas.addEventListener('mousemove', drawing);
// canvas.addEventListener('mousedown', () => isDraw = true);
// canvas.addEventListener('mouseup', () => isDraw = false);
// canvas.addEventListener('mouseout', () => isDraw = false);





// const load      = document.querySelector('.button-load');
// const bnw       = document.querySelector('.button-bnw');
// const search    = document.querySelector('.search-city');
// // const imageSize = document.querySelector('.image-size input');
// const download  = document.querySelector('.button-download');

// load.addEventListener('click', () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     const img = new Image();
//     img.setAttribute('crossOrigin', '');

//     let filterText = search.value;

//     if(!filterText) {
//         return alert('Введите название города в строке поиска');
//     }
//     filterText = (filterText[0].toUpperCase() + filterText.slice(1)).replace(/\s/g, '-');

//     const url = `https://api.unsplash.com/photos/random?query=town,${filterText}&client_id=9907cf3940a5d39116aeba3fdb85471728137dd04a24ce1c284ee97a3233b813`;
//     fetch(url)
//       .then(res => res.json())
//       .then(data => { 
//         img.onload = function() {
//             context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
//         }
//         img.src = `${data.urls.small}`;
//       });
// });

// bnw.addEventListener('click', () => {
//     const imgd = context.getImageData(0, 0, canvas.width, canvas.height);
//     console.log(imgd);
//     var pix = imgd.data;
//     for (var i = 0, n = pix.length; i < n; i += 4) {
//         var grayscale = pix[i] * .3 + pix[i + 1] * .59 + pix[i + 2] * .11;
//         pix[i] = grayscale; // red
//         pix[i+1] = grayscale; // green
//         pix[i+2] = grayscale; // blue
//     }
//     context.putImageData(imgd, 0, 0);
// })

// download.addEventListener('click', (e) => {
//     var dataURL = canvas.toDataURL('image/png');
//     download.href = dataURL;
// })

// const img = document.createElement('img');
// img.onload = function() {
//     context.drawImage(img, 90, 0);
// }
// img.src = `${getLinkToImage()}`;



