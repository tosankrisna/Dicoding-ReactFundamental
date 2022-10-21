/* eslint-disable no-restricted-globals */
import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "./NotFoundPage";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import Loading from "../components/Loading";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null,
      initializing: true,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async onDeleteHandler(id) {
    if (confirm("Yakin ingin menghapus catatan?")) {
      await deleteNote(id);
    }
  }

  async onArchiveHandler(id) {
    await archiveNote(id);
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
        initializing: false,
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return <Loading />;
    }

    return (
      <>
        {this.state.note === null ? (
          <NotFoundPage />
        ) : (
          <NoteDetail
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onUnarchive={this.onUnarchiveHandler}
            {...this.state.note}
          />
        )}
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
