import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

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
        className="create-note"
        onSubmit={(event) => {
          props.setClick(note);
          event.preventDefault();
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}

        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab color="#f39c12" type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
