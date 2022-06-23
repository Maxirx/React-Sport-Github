import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link as LinkRouter } from "react-router-dom";
import userAction from "../../redux/actions/userAction";
import { connect } from "react-redux";
import GoogleSignUp from "./googleSignUp";
import "../../styles/login.css";

const SignUp = (props) => {
  const country = [
    "Choose...",
    "Argentina",
    "Brazil",
    "Colombia",
    "Chile",
    "Uruguay",
    "United States",
    "Spain",
    "China",
  ];

  const [selectCountry, setSelectCountry] = useState("unselected");

  function selected(event) {
    setSelectCountry(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      image: event.target[4].value,
      adress: event.target[5].value,
      city: event.target[6].value,
      country: selectCountry,
      from: "signUp",
    };
    props.signUpUser(userData);
  };

  return (
    <div className="containerSignUp">
      <h2>
        <span className="nombreLogin">Create a new account!</span>
      </h2>
      <p>
        ¿Do you already have an account?{" "}
        <LinkRouter to={"/signIn"} className="signUpButton">
          Log In!
        </LinkRouter>
      </p>
      <div className="containerGoogle">
        <GoogleSignUp />
      </div>
      <Form className="formSignUp" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" name="firstName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name="lastName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Url Image</Form.Label>
          <Form.Control type="text" placeholder="URL Image" name="image" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Adress" name="adress" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" name="city" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="country"
            onChange={selected}
          >
            {country.map((country) => (
              <option>{country}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <div className="submitContainer">
          <input type="submit" className="submitButton" placeholder="Log Up" />
        </div>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  signUpUser: userAction.signUpUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
