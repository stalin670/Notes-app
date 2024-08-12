import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`http://localhost:4000/note/`);
        const notes = await response.json();

        setNotes(notes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotes(); 
  }, []);

  console.log("Look at it", typeof(notes));

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  const handleAddNote = (event) => {
    event.preventDefault();

    console.log("Title :", title);
    console.log("Content :", content);

    const NewNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([NewNote, ...notes]);

    setTitle("");
    setContent("");
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      content: content,
    }

    const updatedNotesList = notes.map((note) => {
      if (note.id === selectedNote.id) {
        return updatedNote;
      }
      else {
        return note;
      }
    })

    setNotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  }

  const deleteNote = (event, noteId) => {
    event.stopPropagation();

    const updatedNotes = notes.filter(
      (note) => note.id !== noteId
    )

    setNotes(updatedNotes);
  }

  return (
    <div className="app-container">
      <form onSubmit={
        (event) => {
          selectedNote ? handleUpdate(event) : handleAddNote(event)
        }
      } className="note-form">
        <input value={title} onChange={(event) => {
          setTitle(event.target.value);
        }} placeholder="Title" Required />
        <textarea value={content} onChange={(event) => {
          setContent(event.target.value)
        }} placeholder="Content" rows={10} Required ></textarea>

        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) :
          (<button type="submit">Add Note</button>)

        }
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div onClick={() => handleNoteClick(note)} className="note-item">
            <div className="notes-header">
              <button onClick={(event) => {
                deleteNote(event, note.id)
              }} className="edit-buttons">x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;