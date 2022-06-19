import React, { useState } from "react";
import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  // Destructuring from props
  const { isModalOpen, selectedNote, toggleModal } = props;

  //Declaring State values
  const [hasCursor, setHasCursor] = useState(false);

  // Functions

  // Check if cursor is true and if false and on click event it should close the modal
  const handleCloseModal = () => !hasCursor && toggleModal();
  const handleMouseOverModal = () => setHasCursor(true);
  const handleMouseOutModal = () => setHasCursor(false);

  return (
    <div
      className={`modal ${isModalOpen ? "open-modal" : ""} `}
      onClick={handleCloseModal}
    >
      <div
        className="modal-content"
        onMouseOver={handleMouseOverModal}
        onMouseOut={handleMouseOutModal}
      >
        <Form selectedNote={selectedNote} toggleModal={toggleModal} edit />
      </div>
    </div>
  );
};

export default Modal;
