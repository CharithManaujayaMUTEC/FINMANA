import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import React from 'react';
import img1 from './Img1.jpg';
import img2 from './Img2.jpg';
import img3 from './Img3.jpg';
import './Caro.css'

function Caro() {
  return (
    <div className='Caro' >
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={img1} height={"700px"} width={"100%"} alt="First slide" />
        <Carousel.Caption>
          <h3>Easy to use...</h3>
          <p>Each and every steps are introduced</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src={img2} height={"700px"} width={"100%"} alt="Second slide" />
        <Carousel.Caption>
          <h3>Save more money...</h3>
          <p>Analytical tools show the ways to reduce the expenditure and enhance the income</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Image src={img3} height={"700px"} width={"100%"} alt="Third slide" />
        <Carousel.Caption>
          <h3>Easy to access...</h3>
          <p>
            You can access from your laptop, mobli phone or anyother device
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default Caro;