import React from "react";
import Caro from "../Components/Carousel/Caro";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Caro />
      <h1>Go to your profile</h1>
      <Stack direction="vertical" gap={2} className="col-md-auto xs-auto">
        <Link to="/Login" className="btn btn-primary btn-lg" role="button">
          Log In
        </Link>
        <Link to="/Register" className="btn btn-secondary btn-lg" role="button">
          Sign Up
        </Link>
      </Stack>
    </div>
  );
};

export default Home;
