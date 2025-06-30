import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updatenote } = props;
  const onClick = () => {
    deletenote(note._id);
  }
  return <div className="my-3">
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <div className="ms-auto d-flex">
            <i className="fa-solid fa-pen-to-square fa-lg mx-2" onClick={() => { updatenote(note) }}></i>
            <i className="fa-solid fa-trash-can fa-lg mx-2" onClick={onClick}></i>
          </div>
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary my-1">Tags: {note.tags}</h6>

        <p className="card-text">{note.description ? note.description.slice(0, 100) : "No description available"}</p>
      </div>
    </div>
  </div>;
};

export default NoteItem;
