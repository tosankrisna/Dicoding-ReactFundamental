import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const submitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="flex justify-center">
            <form
              className="flex flex-col w-5/12 p-6 shadow-lg"
              onSubmit={submitHandler}
            >
              <label htmlFor="email" className="font-semibold mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="rounded-lg p-2 border-2 mb-4 border-gray-400"
                placeholder={locale === "id" ? "Masukan email" : "Input email"}
                value={email}
                onChange={onEmailChange}
              />
              <label htmlFor="password" className="font-semibold my-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="rounded-lg p-2 border-2 mb-2 border-gray-400"
                placeholder={
                  locale === "id" ? "Masukan password" : "Input password"
                }
                value={password}
                onChange={onPasswordChange}
              />
              <button
                type="submit"
                className="bg-blue-600 rounded-full my-4 p-2 mb-6 text-white"
              >
                Submit
              </button>
              <p className="text-center">
                <Link to="/register" className="font-semibold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
