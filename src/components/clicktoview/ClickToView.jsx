import styles from './ClickToView.module.css';
import { useState } from 'react';

export default function ClickToView() {
  const [isVisible, setIsVisible] = useState(null)

  // const makeVisible = () => {
  //   console.log('button has been clicked')
  //   if (isVisible !== 'invisible') {
  //     setIsVisible('invisible');
  //   } else {
  //     setIsVisible('visible');
  //   }
  // }

  return (
    <section className={styles.clicktoview_wrapper}>
      <p>
        Lorem ipsum{' '}
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 1 ? setIsVisible(null) : setIsVisible(1)
          }
        >
          dolor
        </button>{' '}
        <span className={isVisible === 1 ? styles.visible : styles.invisible}>
          sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
          vitae{' '}
        </span>
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 2 ? setIsVisible(null) : setIsVisible(2)
          }
        >
          pellentesque
        </button>{' '}
        <span className={isVisible === 2 ? styles.visible : styles.invisible}>
          sem placerat. In id cursus mi pretium tellus duis convallis. Tempus
          leo eu aenean sed diam urna tempor.
        </span>
      </p>
      <p>
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 3 ? setIsVisible(null) : setIsVisible(3)
          }
        >
          Pulvinar
        </button>{' '}
        <span className={isVisible === 3 ? styles.visible : styles.invisible}>
          vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere.
        </span>{' '}
        Ut hendrerit{' '}
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 4 ? setIsVisible(null) : setIsVisible(4)
          }
        >
          semper
        </button>{' '}
        <span className={isVisible === 4 ? styles.visible : styles.invisible}>
          vel class aptent taciti sociosqu. Ad litora torquent per conubia
          nostra inceptos himenaeos.
        </span>{' '}
      </p>
      <p>
        Lorem ipsum{' '}
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 5 ? setIsVisible(null) : setIsVisible(5)
          }
        >
          {' '}
          dolor
        </button>{' '}
        <span className={isVisible === 5 ? styles.visible : styles.invisible}>
          sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
          vitae{' '}
        </span>
        <button
          className={styles.viewmore_btn}
          onClick={() =>
            isVisible === 6 ? setIsVisible(null) : setIsVisible(6)
          }
        >
          pellentesque
        </button>{' '}
        <span className={isVisible === 6 ? styles.visible : styles.invisible}>
          sem placerat. In id cursus mi pretium tellus duis convallis. Tempus
          leo eu aenean sed diam urna tempor.
        </span>
      </p>
    </section>
  );
}
