import React from 'react';
import styles from '../styles/Detail.module.css';

const Detail = ({ bg, title, text, url, alt }) => {
  const classes = `${styles.content} container`;
  return (
    <div className={styles.details} style={{ backgroundColor: `${bg}` }}>
      <div className={classes}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={styles.image}>
          <img className={styles.image} src={url} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
