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
      { key: (card.length) +1 , id:(card.length) +1,  title: note.title, content: note.content },
    ]);
    console.log(card);
  }
  function removeNote(id){
    addCard(card.filter((item, index) => {
        return index !== id;
      }));
  }

  return (
    <div>
      <Header />
      <CreateArea setClick={clickHandle} />
      {card.map((ob,index) => (
        <Note key={index} id={index} title={ob.title} content={ob.content} deleteFn={removeNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
