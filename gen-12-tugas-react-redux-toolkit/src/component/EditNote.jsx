import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

export async function noteEditLoader(props) {
  return props.params.id;
}

const defaultInput = {
  title: "",
  description: "",
  category: "",
  date: "",
  time: "",
};

export default function EditNote() {
  let navigate = useNavigate();
  const [noteInput, setNoteInput] = useState({ ...defaultInput });
  const { color } = useContext(ThemeContext);

  const handleFormInput = (type, value) => setNoteInput({ ...noteInput, [type]: value });

  const idDiterima = useLoaderData();

  const handleEditSubmit = async (evt) => {
    evt.preventDefault();
    await axios.put("http://localhost:3000/note/" + noteInput.id, noteInput);
    setNoteInput({ ...defaultInput });
    navigate("/Home");
  };

  const EditbyId = async () => {
    const res = await axios.get("http://localhost:3000/note/" + idDiterima);
    console.log(res.data);
    setNoteInput(res.data);
  };

  useEffect(() => {
    EditbyId();
  }, []);

  return (
    <>
      <div>
        <Link to="/home" className={color ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}>
          <i class="bi bi-arrow-left-short">&nbsp;Back</i>
        </Link>
      </div>
      <div className="FormNotes py-4">
        <form onSubmit={handleEditSubmit}>
          <div className={color ? "text-primary text-center" : "text-dark text-center"}>
            <h5 className="mb-4">Edit Note</h5>
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" aria-label="Title" value={noteInput.title} onChange={(evt) => handleFormInput("title", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" aria-label="description" value={noteInput.description} onChange={(evt) => handleFormInput("description", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" value={noteInput.category} onChange={(evt) => handleFormInput("category", evt.target.value)} required>
              <option value="" selected>
                Select Category
              </option>
              <option value="Daily">Daily</option>
              <option value="Important">Important</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" value={noteInput.date} onChange={(evt) => handleFormInput("date", evt.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input type="time" className="form-control" value={noteInput.time} onChange={(evt) => handleFormInput("time", evt.target.value)} required />
          </div>
          <button type="submit" className={color ? "btn btn-primary" : "btn btn-dark"}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}
