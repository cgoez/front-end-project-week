import React, { Component } from "react";
import Note from "./Note/Note";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [
        {
          id: 0,
          title: "This is a sample note!",
          content: "something something notetaking"
        },
        {
          id: 1,
          title: "Test for note app!",
          content: "something something notetaking"
        },
        {
          id: 2,
          title: "Hey it's working!",
          content: "something something notetaking"
        },
        {
          id: 3,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 4,
          title: "Start adding more functionality!",
          content: "something something notetaking"
        },
        {
          id: 5,
          title: "Notes on notes on notes!",
          content: "something something notetaking"
        }
      ]
    };
  }

  render() {
    const { title, content } = this.state.notesList;
    return (
      <div>
        {this.state.notesList.map(note => (
          <div>
            <Note key={note.id} note={note} />
          </div>
        ))}
      </div>
    );
  }
}