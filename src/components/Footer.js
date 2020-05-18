import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <small>© {year} Golden Coast Financial Services</small>
    </footer>
  );
};

export default Footer;
