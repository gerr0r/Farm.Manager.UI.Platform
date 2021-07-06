import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { REGISTER } from "../gql";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const [sendRegister, { loading, data, error }] = useMutation(REGISTER, {
    onError(error) {
      setErrorMessage(error.message);
    },
  });

  function changeValue(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function submitRegister(e) {
    e.preventDefault();
    if (!values.username || !values.password) {
      setErrorMessage("Username and password required");
      return;
    }
    if (values.password !== values.password2) {
      setErrorMessage("Passwords mismatch");
      return;
    }
    sendRegister({
      variables: {
        email: values.username,
        password: values.password,
      },
    });
  }

  return (
    <div>
      {data ? (
        <div className="form1">
          <h1>{data.register}</h1>
          <Link to="/login">Try Login now!</Link>
        </div>
      ) : (
        <form className="form1" onSubmit={submitRegister}>
          <h1>Register</h1>
          <input
            type="text"
            name="username"
            placeholder="Account username"
            value={values.username}
            onChange={changeValue}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={values.password}
            onChange={changeValue}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={values.password2}
            onChange={changeValue}
          />
          {errorMessage && <small>{errorMessage}</small>}
          {loading ? (
            <button disabled>LOADING...</button>
          ) : (
            <button>Register</button>
          )}
          <Link to="/login">Already have an account? Login here!</Link>
        </form>
      )}
    </div>
  );
};

export default Register;
