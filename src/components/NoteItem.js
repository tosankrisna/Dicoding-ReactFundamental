import React from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="card p-4 bg-neutral-100 shadow-lg flex flex-col">
      <Link
        to={`/notes/${id}`}
        className="title font-semibold md:text-lg text-sm mb-1 text-black"
      >
        {title}
      </Link>
      <span className="text-gray-500 text-sm mb-1">
        {moment(createdAt).format("dddd, Do MMMM YYYY")}
      </span>
      <p className="text-justify md:text-md text-sm line-clamp-3 text-black">
        {parser(body)}
      </p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
