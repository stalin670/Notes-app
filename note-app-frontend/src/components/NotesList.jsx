import React from 'react';
import NoteItem from './NoteItem';
import '../css/NotesList.css';

const NotesList = ({ notes, onNoteClick, onDeleteNote }) => {
  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onClick={() => onNoteClick(note)}
          onDelete={(event) => {
            event.stopPropagation();
            onDeleteNote(note.id);
          }}
        />
      ))}
    </div>
  );
};

export default NotesList;
