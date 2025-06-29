import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "685f5e8a2c4ef1c789c3e218",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "hello",
      "description": "this is shashank  in ee Lorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;a",
      "tags": "common conversation",
      "date": "2025-06-28T03:16:26.621Z",
      "__v": 0
    },
    {
      "_id": "685f5ebe2c4ef1c789c3e21a",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "Notes of dsa",
      "description": "This is Tarjan's algo for SCC Lorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;a",
      "tags": "DSA",
      "date": "2025-06-28T03:17:18.818Z",
      "__v": 0
    },
    {
      "_id": "685f5ed52c4ef1c789c3e21c",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "Notes of bfs",
      "description": "This Lorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;ais Kahn's algo for SCC",
      "tags": "DSA",
      "date": "2025-06-28T03:17:41.354Z",
      "__v": 0
    },
    {
      "_id": "685f5f0b2c4ef1c789c3e21e",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "Notes of articulation point",
      "description": "This is Kosaraju algo for Articulation  pointLorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;a",
      "tags": "DSA",
      "date": "2025-06-28T03:18:35.611Z",
      "__v": 0
    },
    {
      "_id": "685f5f542c4ef1c789c3e220",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "Notes of shortest path",
      "description": "Dijkstra's AlgoLorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;a",
      "tags": "DSA,Graph",
      "date": "2025-06-28T03:19:48.989Z",
      "__v": 0
    },
    {
      "_id": "685f5f652c4ef1c789c3e222",
      "user": "685f5e612c4ef1c789c3e216",
      "title": "Notes of graph",
      "description": "DFS Algo Lorem ipsuma;lksndf;oianseofinwoeinf;aosinfosenf;lksen fo;ienrqoiewnflk;sdnfoihewroifnas;lkndfoi;nerofn as;lndofnasinefoisnf;an nskdlfno;aenofna;dncn a;lsneoinfa;owef a;lsk doi;fn;a",
      "tags": "Graph",
      "date": "2025-06-28T03:20:05.862Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);
  // Add a note
  const addnote = (title, description, tag) => {
    const note = {
      "_id": "685f5f652c4ef1c789c3e222",
      "user": "685f5e612c4ef1c789c3e216",
      "title": title,
      "description": description,
      "tags": tag,
      "date": "2025-06-28T03:20:05.862Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete a note
  const deletenote = () => {

  }
  // Edit a note
  const editnote = () => {

  }
  return (
    <noteContext.Provider value={{ notes, addnote, deletenote, editnote }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;