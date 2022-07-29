import type { NextPage } from 'next'

import styles from '../styles/speech-recognition.module.css'

const SpeechRecognitionPage: NextPage = () => {
  return (
    <>
      <span className="notDone">You know</span>
      <div className={styles.container}>
        <h1>recording in progress</h1>
        <div className={styles.parent}></div>
      </div>
    </>
  )
}

export default SpeechRecognitionPage


// window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;


// const parent = document.querySelector('.parent');
// // parent.appendChild(p);

// recognition.start();

// // recognition.onsoundstart = function() {
// //     console.log('звук пошел')
// // }

// let pCount = 0;

// recognition.addEventListener('result', e => {
//     let transcript = Array.from(e.results)
//         .map(result => result[0])
//         .map(result => result.transcript);
//     let ifLast = Array.from(e.results)
//         .map(result => result.isFinal);

//         // let r = document.createElement('p');
//         // parent.appendChild(r);
//         // parent.lastChild.innerHTML = transcript[pCount];
//     if(ifLast[pCount] == true){
//         let p = document.createElement('p');
//         parent.appendChild(p);
//         console.log('DANG')
//         parent.lastChild.innerHTML = transcript[pCount];
//         pCount++;
        
//     }

    

//     // console.log(transcript);
//     // console.log(ifLast);

// });