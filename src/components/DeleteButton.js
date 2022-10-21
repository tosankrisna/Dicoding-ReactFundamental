import React from "react";
import { FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";

function DeleteButton({ id, onDelete }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <Link
            to={"/"}
            className="mt-3 flex items-center gap-2 font-semibold text-white bg-red-700 py-2 md:px-4 px-3 rounded-full"
            onClick={() => onDelete(id)}
          >
            <FiTrash2 /> {locale === "id" ? "Hapus" : "Delete"}
          </Link>
        );
      }}
    </LocaleConsumer>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
