import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;

  return (
    <div className="container my-3">
      <Addnote />
      <h2>Your Notes</h2>
      <div className="container">
        <div className="row mb-4">
          {notes.map((note) => (
            <div className="col-md-4" key={note._id}>
              <NoteItem note={note} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

