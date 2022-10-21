import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NotFoundPage() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="container mx-auto text-center">
            <h1 className="font-extrabold text-8xl mt-32">404</h1>
            <p className="text-lg mt-2 font-semibold">
              {locale === "id" ? "Halaman Tidak Ditemukan!" : "Page not found!"}
            </p>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default NotFoundPage;
