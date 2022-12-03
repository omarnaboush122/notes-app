import AddNotes from "./AddNotes";
import Note from "./Note";

const NotesList = ({notes,addNote,deleteNote}) => {
  return ( 
    <div className="notes-list">
      {notes.map(note => {
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} deleteNote={deleteNote}/>
      })}
      <AddNotes handleAddNote={addNote}  />
    </div>
   );
}
 
export default NotesList;