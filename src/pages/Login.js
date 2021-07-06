import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../AuthContext";

import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../gql";

const Login = () => {
  const { login } = useAuthContext();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const [sendLogin, { loading, data, error }] = useLazyQuery(LOGIN, {
    onCompleted(data) {
      login(data.login.token, data.login.account);
      setErrorMessage(false);
    },
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

  function submitLogin(e) {
    e.preventDefault();
    if (!values.username || !values.password) {
      setErrorMessage("Username and password required");
      return;
    }
    sendLogin({
      variables: {
        email: values.username,
        password: values.password,
      },
    });
  }

  return (
    <div>
      <form className="form1" onSubmit={submitLogin}>
        <h1>Login</h1>
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
        {errorMessage && <small>{errorMessage}</small>}
        {loading ? (
          <button disabled>LOADING...</button>
        ) : (
          <button>Login</button>
        )}
        <Link to="/register">Don't have an account? Register here!</Link>
      </form>
    </div>
  );
};

export default Login;
