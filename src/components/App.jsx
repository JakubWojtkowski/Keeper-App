import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

    function addNote(note) {
    }

    return (
        <div>
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        <Note key={1} title="Note title" content="Note content"/>
        
        <Footer />
        </div>
    );
}

export default App;