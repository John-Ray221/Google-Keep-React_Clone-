import React, { useState } from "react";

const Note = (props) => {
  // Destructuring from props
  const { toggleModal, note, setSelectedNote } = props;

  // Destructuring from useState // Declaring state values
  const [title] = useState(note.title);
  const [text] = useState(note.text);
  const [isHover, setIsHover] = useState(false);

  // Event Handlers

  // When click on a note noteClickHandler will trigger which will open up model
  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
  };

  // Check if user hover over or on note to display icons
  const hoverOverHandler = () => {
    setIsHover(true);
  };

  const hoverOutHandler = () => {
    setIsHover(false);
  };

  // Delete function
  const deleteHandler = () => props.deleteNote(note.id);

  return (
    <div
      className="note"
      id={note.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-icons check-circle">check_circle</span>
      )}

      <div className="title">{title}</div>
      <div className="text">{text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-icons-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
