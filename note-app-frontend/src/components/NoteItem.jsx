import React from 'react';
import '../css/NoteItem.css';

const NoteItem = ({ note, onClick, onDelete }) => {
  return (
    <div onClick={onClick} className="note-item">
      <div className="notes-header">
        <button onClick={onDelete} className="edit-buttons">x</button>
      </div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteItem;