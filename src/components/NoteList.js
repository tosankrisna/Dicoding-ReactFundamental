import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { FiAlertTriangle } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteList({ notes }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return notes.length ? (
          <div className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-6">
            {notes.map((note) => (
              <NoteItem key={note.id} {...note} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-20">
            <FiAlertTriangle size={80} />
            <h1 className="font-bold text-2xl mt-2">
              {locale === "id" ? "Catatan Kosong!" : "Note Empty!"}
            </h1>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
