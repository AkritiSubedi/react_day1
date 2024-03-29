import React, { useState } from "react";
// import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpended, setExpended] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand(){
    setExpended(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpended && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="{isExpanded ? 3: 1}"
        />
        <Zoom in ={isExpended}>

        <Fab onClick={submitNote}>Add</Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
