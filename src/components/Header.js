import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.brand}>Golden Coast Financial Services</h3>
    </header>
  );
};

export default Header;
