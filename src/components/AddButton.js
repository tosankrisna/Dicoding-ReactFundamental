import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";

function AddButton() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <Link
            to="/notes/new"
            className="mt-8 flex items-center gap-2 font-semibold text-white bg-blue-600 py-2 px-4 rounded-full"
          >
            <FiPlusCircle />
            {locale === "id" ? "Tambah Catatan" : "Add Note"}
          </Link>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddButton;
