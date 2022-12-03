import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "20/04/2022",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "25/04/2022",
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: "29/04/2022",
    },
  ]);

  const [searchNote, setSearchNote] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  },[notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchNote={setSearchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
