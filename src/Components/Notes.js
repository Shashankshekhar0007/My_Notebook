import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getnotes, editnote } = context;
  const [note, setNote] = useState({ etitle: "", edescription: "", etags: "" });
  const handleClick = (e) => {
    editnote(note.id, note.etitle, note.edescription, note.etags);
    refClose.current.click();
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    getnotes();
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null);
  const refClose = useRef(null);
  const updatenote = (currnote) => {
    ref.current.click();
    setNote({ id: currnote._id, etitle: currnote.title, edescription: currnote.description, etags: currnote.tags });
  }
  return (
    <div className="container my-3">
      <Addnote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label"><h3>Title</h3></label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label"><h3>Description</h3></label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="tags" className="form-label"><h3>Tag</h3></label>
                  <input type="text" className="form-control" id="etags" name="etags" value={note.etags} onChange={onChange}></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <h2>Your Notes</h2>
      <div className="container">
        <div className="row mb-4">
          {notes.map((note) => (
            <div className="col-md-4" key={note._id}>
              <NoteItem note={note} updatenote={updatenote} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

