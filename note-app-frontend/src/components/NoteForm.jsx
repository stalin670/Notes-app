import React from 'react';
import '../css/NoteForm.css';

const NoteForm = ({
  title,
  content,
  setTitle,
  setContent,
  onAddNote,
  onUpdateNote,
  selectedNote,
  onCancel,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    selectedNote ? onUpdateNote() : onAddNote();
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Content"
        rows={10}
        required
      />
      {selectedNote ? (
        <div className="edit-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      ) : (
        <button type="submit">Add Note</button>
      )}
    </form>
  );
};

export default NoteForm;
