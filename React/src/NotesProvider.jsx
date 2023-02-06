import { createContext, useState } from "react";
import axios from "axios";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [note, setNote] = useState([]);

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/note");
    setNote(res.data);
  };

  const shareValue = {
    note,
    setNote,
    getAllNotes,
  };

  return <NotesContext.Provider value={shareValue}>{children}</NotesContext.Provider>;
}
