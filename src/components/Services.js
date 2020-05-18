import React, { useState } from 'react';
import styles from '../styles/Services.module.css';
import computer from '../images/computer.jpg';
import planning from '../images/planning.jpg';
import calculator from '../images/calculator.jpg';

import Carousel from 'react-bootstrap/Carousel';

const Services = () => {
  return (
    <div className={styles.services}>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img className="d-block w-100" src={computer} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={planning} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={calculator} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Services;
