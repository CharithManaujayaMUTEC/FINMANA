import React from 'react'
import Caro from '../Components/Carousel/Caro'
import Button from 'react-bootstrap/Button';
import './Home.css'
import { Stack } from 'react-bootstrap';


const Home = () => {
  return (
    <div className='Home'>
      <Caro />
      <h1>Go to your profile</h1>
      <Stack direction="vertical"gap={2} className="col-md-auto xs-auto">
      <a href="./Login" class="btn btn-primary btn-lg " tabindex="-1" role="button" aria-disabled="true">Log In</a>
      <a href="#" class="btn btn-secondary btn-lg" tabindex="-1" role="button" aria-disabled="true">Sign Up</a>
      </Stack>
    </div>
  )
}

export default Home
