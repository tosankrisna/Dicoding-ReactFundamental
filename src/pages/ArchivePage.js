import React from "react";
import { useSearchParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Loading from "../components/Loading";
import NoteHeader from "../components/NoteHeader";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNote: [],
      keyword: props.defaultKeyword || "",
      initializing: true,
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        archivedNote: data,
        initializing: false,
      };
    });
  }

  async componentDidUpdate() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        archivedNote: data,
        initializing: false,
      };
    });
  }

  render() {
    const notes = this.state.archivedNote.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    if (this.state.initializing) {
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
                    title={locale === "id" ? "Arsip Catatan" : "Archive Notes"}
                  />
                  <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}
                  />
                </div>
                <NoteList notes={notes} />
              </div>
            </>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default ArchivePageWrapper;
