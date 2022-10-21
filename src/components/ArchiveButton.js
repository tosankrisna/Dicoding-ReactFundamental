import React from "react";
import { FiArchive } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchiveButton({ id, archived, onArchive, onUnarchive }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        let text = "";
        if (archived && locale === "id") {
          text = "Batal";
        } else if (!archived && locale === "id") {
          text = "Arsip";
        } else if (archived && locale === "en") {
          text = "Cancel";
        } else {
          text = "Archive";
        }

        return (
          <Link
            to={"/arsip"}
            onClick={function () {
              archived ? onUnarchive(id) : onArchive(id);
            }}
            className="mt-3 flex items-center gap-2 font-semibold text-white bg-yellow-500 py-2 md:px-4 px-3 rounded-full"
          >
            <FiArchive /> {text}
          </Link>
        );
      }}
    </LocaleConsumer>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
