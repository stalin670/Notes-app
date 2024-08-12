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

  const handleAddNote = async () => {
    // This is just a data from frontend 

    // const newNote = {
    //   id: notes.length + 1,
    //   title,
    //   content,
    // };

    // Now we will fetch the data from database using backend api

    try {
      const response = await fetch(`http://localhost:4000/note/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const newNote = await response.json();

      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");

    } catch (error) {
      console.log(error)
    }

  };

  const handleUpdateNote = async() => {
    if (!selectedNote) return;

    try {
      const response = await fetch(`http://localhost:4000/note/${selectedNote.id}`, {
        method : 'PATCH',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          title,
          content,
        })
      })

      const updatedNote = await response.json();

      const updatedNotes = notes.map(note =>
        note.id === selectedNote.id
          ? updatedNote
          : note
      );
  
      setNotes(updatedNotes);
      setTitle("");
      setContent("");
      setSelectedNote(null);

    } catch (error) {
      console.log(error);
    }

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

  const handleDeleteNote = async (noteId) => {

    try {
      const updatedNotes = notes.filter(note => note.id !== noteId);
      setNotes(updatedNotes);
      
      await fetch(`http://localhost:4000/note/${noteId}`, {
        method : "DELETE",
      })
    } catch (error) {
      
    }

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
