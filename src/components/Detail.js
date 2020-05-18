import React from 'react';
import styles from '../styles/Detail.module.css';

const Detail = ({ bg, direction, title, text, url, alt }) => {
  const detailWrapper = `${styles.wrapper} container`;

  return (
    <div className={styles.details} style={{ backgroundColor: `${bg}` }}>
      <div className={detailWrapper} style={{ flexDirection: `${direction}` }}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={styles.image}>
          <img src={url} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
