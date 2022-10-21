import React from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import parser from "html-react-parser";

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="container mx-auto p-16">
      <h1 className="font-bold lg:text-6xl text-3xl mb-3">{title}</h1>
      <span className="text-gray-500 lg:text-xl">
        {moment(createdAt).format("dddd, Do MMMM YYYY")}
      </span>
      <p className="mt-3 text-justify">{parser(body)}</p>
      <div className="flex gap-4">
        <ArchiveButton
          id={id}
          archived={archived}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetail;
