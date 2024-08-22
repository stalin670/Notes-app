import React from "react";

const NoteCard = (props) => {
  const title = props.title;
  const content = props.content;

  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default NoteCard;
