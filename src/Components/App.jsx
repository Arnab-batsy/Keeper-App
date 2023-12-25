import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [card, addCard] = useState([...notes]);

  function clickHandle(note) {
    addCard([...card, { title: note.title, content: note.content }]);
    //The id and the key are not needed to be kept on the object. Just passing them through props is enough!
  }
  function removeNote(id) {
    addCard(
      card.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea setClick={clickHandle} />
      {card.map((ob, index) => (
        <Note
          key={index}
          id={index}
          title={ob.title}
          content={ob.content}
          deleteFn={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
