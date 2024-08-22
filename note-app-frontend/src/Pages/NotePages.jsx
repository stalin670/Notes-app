import React, { useState } from "react";
import NoteCard from "./NoteCard";
import "../style/Note.css";

const NotePages = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [values, setvalues] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) {
      alert("Please fill in the field");
      return;
    }

    if (editIndex === -1) {
      setvalues((prevVal) => {
        return [...prevVal, note];
      });
    } else {
      // Updating an existing item
      const updatedItem = [...values];
      updatedItem[editIndex] = {
        title: note.title,
        content: note.content,
      };
      setvalues(updatedItem);
      setEditIndex(-1);
    }

    setNote({
      title: "",
      content: "",
    });
  };

  const deleteNote = (id) => {
    setvalues((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  const EditNote = (id) => {
    setEditIndex(id);
    setNote({
      title: values[id].title,
      content: values[id].content,
    });
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className="notes-title">Notes</h1>
      </div>
      <div>
        <form className="create-note" action="">
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            type="text"
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={note.content}
            placeholder="Take a note..."
            type="text"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>

      {values.map((item, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
            onEdit={() => EditNote(index)}
          />
        );
      })}
    </div>
  );
};

export default NotePages;
