import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

export async function noteLoader(props) {
  return props.params.id;
}

export default function DetailNote() {
  const [noteDetail, setNoteDetail] = useState([]);
  const idDiterima = useLoaderData();
  const { color } = useContext(ThemeContext);

  const getNotebyId = async () => {
    const res = await axios.get("http://localhost:3000/note/" + idDiterima);
    console.log(res.data);
    setNoteDetail({
      id: res.data.id,
      title: res.data.title,
      description: res.data.description,
      category: res.data.category,
      date: res.data.date,
      time: res.data.time,
    });
  };

  useEffect(() => {
    getNotebyId();
  }, []);

  return (
    <>
      <div>
        <Link to="/home" className="text-primary">
          <i class="bi bi-arrow-left-short"></i>Back
        </Link>
      </div>
      <div className="text-center">
        <div className={color ? "text-center text-primary" : "text-center"}>
          <h5>Detail Note</h5>
        </div>
        <div className="mt-5">
          <div className="mb-3">
            {noteDetail.date} | {noteDetail.time} | {noteDetail.category}
          </div>
          <div className="mb-3">
            <h2>{noteDetail.title}</h2>
          </div>
          <div className="mb-3">
            <p>{noteDetail.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
