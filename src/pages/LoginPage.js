import React from "react";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <div className="container mx-auto mt-16">
      <h1 className="font-bold text-4xl text-center">Login</h1>
      <LoginInput login={onLoginHandler} />
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
