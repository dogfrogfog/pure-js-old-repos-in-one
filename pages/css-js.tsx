import type { NextPage } from 'next'

import styles from '../styles/css-js.module.css'

const CssJsPage: NextPage = () => {
  return (
    <>
      <span className="notDone">Style change script is commented<br/>feel free to open PR</span>
      <div className={styles.container}>
        <h1>Update CSS variables with <span className={styles.base}>JS</span></h1>
        <div className={styles.controls}>
          <label htmlFor="spacing">Spacing:</label>
          <input type="range" name="spacing" max="200" min="0" value="20" data-sizing="px" />
          <label htmlFor="blur">Blur:</label>
          <input type="range" name="blur" max="25" min="0" value="0" data-sizing="px" />
          <label htmlFor="color">Color:</label>
          <input type="color" name="color" />
          <div className={styles.imageContainer}>
            {/* <img src="https://images.unsplash.com/photo-1506047610595-ab105976d1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CssJsPage

// const inputs = document.querySelectorAll('.controls input');
// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//   console.log(this.name)
// }
// inputs.forEach(input => input.addEventListener('onchange', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
          