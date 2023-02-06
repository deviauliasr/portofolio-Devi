import axios from "axios";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { NotesContext } from "../NotesProvider";
import { Link } from "react-router-dom";

export default function Home() {
  const { color } = useContext(ThemeContext);
  const { note, getAllNotes } = useContext(NotesContext);

  const deleteNotes = async (id) => {
    await axios.delete("http://localhost:3000/note/" + id);
    getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <div className=" pl-3 py-4">
        <div className={color ? "btn btn-outline-primary" : "btn btn-outline-dark"}>
          <Link to="/addNote" className="w-20 text-decoration-none">
            <div className={color ? "text-primary" : "text-dark"}>
              <i class="bi bi-plus-circle">&nbsp;New Note</i>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          {note.map((note) => (
            <div className="col-md-3" key={note.id}>
              <div className={color ? "mb-3 card bg-light text-primary" : "mb-3 card text-white bg-dark"} style={{ maxWidth: "18rem" }}>
                <div className="card-header">
                  {note.date} | {note.time} | {note.category}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/DetailNote/${note.id}`} className={color ? "mr-3 text-dark" : "mr-3 text-white"}>
                    <i class="bi bi-eye"></i>
                  </Link>
                  <Link to={`/EditNote/${note.id}`} className={color ? "mr-3 text-dark" : "mr-3 text-white"}>
                    <i class="bi bi-pencil"></i>
                  </Link>
                  <a onClick={() => deleteNotes(note.id)} className={color ? "mr-3 text-dark" : "mr-3 text-white"}>
                    <i class="bi bi-trash3"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
