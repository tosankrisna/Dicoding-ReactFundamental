import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({ logout, user }) {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <LocaleConsumer>
          {({ locale, toggleLocale }) => (
            <nav>
              <ul className="flex gap-6">
                <li>
                  <button onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                  </button>
                </li>
                <li>
                  <button onClick={toggleLocale}>
                    {locale === "id" ? "en" : "id"}
                  </button>
                </li>
                {user && logout !== null ? (
                  <>
                    <li>
                      <Link to="/arsip" className="font-semibold">
                        {locale === "id" ? "Arsip" : "Archive"}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="flex items-center gap-3"
                      >
                        {user} <FiLogOut />
                      </button>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </nav>
          )}
        </LocaleConsumer>
      )}
    </ThemeConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Navigation;
