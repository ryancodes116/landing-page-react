import React from 'react';
import styles from '../styles/Showcase.module.css';
import { Button } from '@material-ui/core';

const Showcase = () => {
  const classes = `${styles.wrapper} container`;

  return (
    <div className={styles.showcase}>
      <div className={classes}>
        <h1 className={styles.title}>Professional Financial Services</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
          metus, molestie a purus id, congue facilisis mi. Duis sit.
        </p>
        <Button variant="contained" color="secondary" size="large">
          Schedule An Appointment
        </Button>
      </div>
    </div>
  );
};

export default Showcase;
