import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const Addnote = () => {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({ title: "", description: "", tags: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tags);
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  return <div>
    <div className="container my-3">
      <h2> Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><h3>Title</h3></label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"><h3>Description</h3></label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label"><h3>Tag</h3></label>
          <input type="text" className="form-control" id="tags" name="tags" onChange={onChange}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  </div>;
};

export default Addnote;
