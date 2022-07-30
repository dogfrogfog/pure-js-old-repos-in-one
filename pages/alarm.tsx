import type { NextPage } from 'next'
import Image from 'next/image'

import styles from '../styles/alarm.module.css'

const AlarmPage: NextPage = () => {

  return (
    <>
      <span className="notDone notWhite">Script to animate HTML is commented<br/>feel free to open PR and fix it</span>
      <div className={styles.container}>
        <h1>LOLSUNSET CLOCK</h1>
        <h3>I can haz time!?</h3>
        <h2 id='timeTag'>00 : 00 : 00</h2>
        <Image id="image" src="" alt="day-time-image" />
        <h3>Set alarm tooooooo:</h3>
        <div id="clocksector">
          <select name="" id="alarms">
            <option value="6">6 : 00</option>
            <option value="7">7 : 00</option>
            <option value="8">8 : 00</option>
            <option value="9">9 : 00</option>
            <option value="10">10 : 00</option>
          </select>
          ts-ignore
          <button onClick={"setAlarm" as any}>Set alarm !!!!!</button>
        </div>
        <h4>Your alarm is not set yet<span id="alarmTime"></span></h4>
      </div>
    </>
  )
}

// script to animate html
// setInterval(() => {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   document.getElementById('timeTag').innerHTML = addZero(hours) + ' : ' + addZero(minutes) + ' : ' + addZero(seconds);

//   let image = document.getElementById('image');

//   if (hours < 6) {
//     image.src = '../night.jpeg';
//   }
//   else if (hours >= 6 && hours < 12) {
//     image.src = '../morning.jpeg';
//   }
//   else if (hours >= 12 && hours < 18) {
//     image.src = '../day.jpeg';
//   }
//   else {
//     image.src = '../evening.jpg';
//   }
//   music(time)
// }, 1000);

// const addZero = (number: number) => {
//   if (Math.floor(number / 10) == 0) {
//     return '0' + number;
//   }

//   return number;
// }

// let time;
// var element = document.getElementById("alarmTime");


// function setAlarm() {
//   let select = document.getElementById('alarms');
//   document.getElementById('alarmTime').innerHTML = 'Your alarm is set to ' + select.options[select.selectedIndex].value + ' : 00';
//   time = select.options[select.selectedIndex].value;
//   element.classList.remove("seted");
//   return;
// }

// function music(num) {
//   let date = new Date();
//   let hours = date.getMinutes();
//   let music = new Audio('alarm.mp3');
//   if (num == hours) {
//     if (!element.classList.contains("seted")) {
//       music.play();
//     }
//     element.classList.add("seted");
//   }
// }

export default AlarmPage
