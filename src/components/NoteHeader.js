import React from "react";
import PropTypes from "prop-types";

function NoteHeader({ title }) {
  return (
    <h1 className="title capitalize md:text-3xl text-lg font-semibold">
      {title}
    </h1>
  );
}

NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoteHeader;
