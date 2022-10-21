import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form
              className="flex flex-col p-3 shadow-lg"
              onSubmit={this.onSubmitHandler}
            >
              <label htmlFor="title" className="font-semibold mb-2">
                {locale === "id" ? "Judul Catatan" : "Note Title"}
              </label>
              <input
                type="text"
                name="title"
                className="rounded-lg p-2 border-2 border-gray-400"
                placeholder={locale === "id" ? "Masukan judul" : "Input title"}
                value={this.state.title}
                onChange={this.onTitleChangeHandler}
              />
              <label htmlFor="body" className="font-semibold my-2">
                {locale === "id" ? "Isi Catatan" : "Note Body"}
              </label>
              <div
                className="p-2 h-60 border-2 border-gray-400 rounded-lg"
                contentEditable
                name="body"
                onInput={this.onInputHandler}
                data-placeholder={
                  locale === "id" ? "Masukan isi catatan" : "Input note body"
                }
              />
              <button
                type="submit"
                className="bg-blue-600 md:w-2/12 w-5/12 rounded-full my-4 p-2 text-white"
              >
                Submit
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
