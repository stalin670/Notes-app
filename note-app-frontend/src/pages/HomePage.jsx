import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';
import '../css/HomePage.css';

const HomePage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", content: "Here we are !" },
    { id: 2, title: "Note 2", content: "Here we are !" },
    { id: 3, title: "Note 3", content: "Here we are !" },
    { id: 4, title: "Note 4", content: "Here we are !" },
    { id: 5, title: "Note 5", content: "Here we are !" },
    { id: 6, title: "Note 6", content: "Here we are !" },
  ]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title,
      content,
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleUpdateNote = () => {
    if (!selectedNote) return;

    const updatedNotes = notes.map(note =>
      note.id === selectedNote.id
        ? { ...note, title, content }
        : note
    );

    setNotes(updatedNotes);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <>
      <NoteForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onAddNote={handleAddNote}
        onUpdateNote={handleUpdateNote}
        selectedNote={selectedNote}
        onCancel={handleCancel}
      />
      <NotesList
        notes={notes}
        onNoteClick={handleNoteClick}
        onDeleteNote={handleDeleteNote}
      />
    </>
  );
};

export default HomePage;
