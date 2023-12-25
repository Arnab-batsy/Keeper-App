import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [card, addCard] = useState([...notes]);

  function clickHandle(note) {
    addCard([
      ...card,
      { key: (card.length) +1 , title: note.title, content: note.content },
    ]);
    console.log(card);
  }

  return (
    <div>
      <Header />
      <CreateArea setClick={clickHandle} />
      {card.map((ob) => (
        <Note key={ob.key} title={ob.title} content={ob.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
