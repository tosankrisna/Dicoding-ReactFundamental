import React from "react";
import { useSearchParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import NoteHeader from "../components/NoteHeader";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [initializing, setInitializing] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    async function fetchActiveNotesData() {
      const { data } = await getActiveNotes();
      setNotes(data);
      setInitializing(false);
    }

    fetchActiveNotesData();
  }, [notes]);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (initializing) {
    return <Loading />;
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <Jumbotron />
            <div className="container mx-auto p-8">
              <div className="flex justify-between mb-4">
                <NoteHeader
                  title={locale === "id" ? "Daftar Catatan" : "Note Lists"}
                />
                <SearchBar
                  keyword={keyword}
                  keywordChange={onKeywordChangeHandler}
                />
              </div>
              <NoteList notes={filteredNotes} />
            </div>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default HomePage;
