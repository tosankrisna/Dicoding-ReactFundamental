import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import AddButton from "./AddButton";

function Jumbotron() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="bg-jumbotron bg-center bg-cover px-10 py-20 flex flex-col items-center">
            <h1 className="text-white font-semibold capitalize lg:text-4xl md:text-2xl text-xl text-center">
              {locale === "id"
                ? "Kelola daftar catatan pribadi anda disini!"
                : "Manage your personal note list here!"}
            </h1>
            <AddButton />
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default Jumbotron;
