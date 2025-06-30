import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  // Add a note
  const getnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1ZjVlNjEyYzRlZjFjNzg5YzNlMjE2In0sImlhdCI6MTc1MTA4MDU0NX0.W5DLAdGxLBY7QL2W_2gjVrmqbfXBgO7BX8Onj3lQ05A"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }
  const addnote = async (title, description, tags) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1ZjVlNjEyYzRlZjFjNzg5YzNlMjE2In0sImlhdCI6MTc1MTA4MDU0NX0.W5DLAdGxLBY7QL2W_2gjVrmqbfXBgO7BX8Onj3lQ05A"
      },
      body: JSON.stringify({ title, description, tags })
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  }
  // Delete a note
  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1ZjVlNjEyYzRlZjFjNzg5YzNlMjE2In0sImlhdCI6MTc1MTA4MDU0NX0.W5DLAdGxLBY7QL2W_2gjVrmqbfXBgO7BX8Onj3lQ05A"
      },
    });
    const json = await response.json();
    // console.log(json);
    const newnote = notes.filter((note) => { return note._id !== id })
    setNotes(newnote)
  }
  // Edit a note
  const editnote = async (id, title, description, tags) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1ZjVlNjEyYzRlZjFjNzg5YzNlMjE2In0sImlhdCI6MTc1MTA4MDU0NX0.W5DLAdGxLBY7QL2W_2gjVrmqbfXBgO7BX8Onj3lQ05A"
      },
      body: JSON.stringify({ title, description, tags })
    });
    const json = await response.json();
    const updatedNotes = notes.map(note =>
      note._id === id ? { ...note, title, description, tags } : note
    );

    setNotes(updatedNotes);
  }
  return (
    <noteContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;