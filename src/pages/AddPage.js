import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <div className="container mx-auto mt-8 w-2/3">
      <h1 className="font-bold text-4xl text-center">Input Catatan</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

export default AddPage;
