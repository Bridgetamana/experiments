import styles from './SquashAndStretch.module.css';

export default function SquashAndStretch() {
  return (
    <section>
      <ul className={styles.link_wrapper}>
        <li className={styles.link}>
          <svg
            className={styles.arrow}
            viewBox='0 0 24 24'
            width={24}
            height={24}
            color={'currentColor'}
            fill={'none'}
          >
            <path
              className={styles.shaft}
              d='M18 12L3 12'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              className={styles.tip}
              d='M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <a href='https://www.linkedin.com/in/bridget-amana'>
            Follow on Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <svg
            className={styles.arrow}
            viewBox='0 0 24 24'
            width={24}
            height={24}
            color={'currentColor'}
            fill={'none'}
          >
            <path
              className={styles.shaft}
              d='M18 12L3 12'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              className={styles.tip}
              d='M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <a href='https://x.com/bridget_amana'>Follow on X</a>
        </li>
        <li className={styles.link}>
          <svg
            className={styles.arrow}
            viewBox='0 0 24 24'
            width={24}
            height={24}
            color={'currentColor'}
            fill={'none'}
          >
            <path
              className={styles.shaft}
              d='M18 12L3 12'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              className={styles.tip}
              d='M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <a href='https://github.com/Bridgetamana'>Follow on Github</a>
        </li>
      </ul>
    </section>
  );
}
