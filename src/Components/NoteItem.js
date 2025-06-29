import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return <div className="my-3">
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <div className="ms-auto d-flex">
            <i className="fa-solid fa-pen-to-square fa-lg mx-2"></i>
            <i className="fa-solid fa-trash-can fa-lg mx-2"></i>
          </div>
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary my-1">Tags: {note.tags}</h6>

        <p className="card-text">{note.description ? note.description.slice(0, 100) : "No description available"}...</p>
        {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
      </div>
    </div>
  </div>;
};

export default NoteItem;
