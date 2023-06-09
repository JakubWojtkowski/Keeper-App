import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes((prevNotes) => {
           return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
        <Header />
        <CreateArea 
            onAdd={addNote}
        />

        {notes.map((note, index) => {
            return <Note
                key={index}
                id={index}
                onDelete={deleteNote}
                title={note.title}
                content={note.content}
            />
        })}
        
        <Footer />
        </div>
    );
}

export default App;