import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.setClick(note);
          event.preventDefault();
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button style= {{fontSize: "25px"}} type="submit">+</button>
      </form>
    </div>
  );
}

export default CreateArea;
