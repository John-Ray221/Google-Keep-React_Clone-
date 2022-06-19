import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  // Destructuring from props
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {/* Check if there is no notes in the notes array and if not display text */}
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        // if there is notes in the array it sould map over the notes array and add a note component
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
