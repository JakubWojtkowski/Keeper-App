import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = React.useState(false);

    function expandArea(){
        setExpanded(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
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

    return ( 
    <div>
        <form className="create-note">
           { isExpanded && (<input
                onChange={handleChange} 
                name="title"
                placeholder="Title"
                value={note.title}
            />)
            }
            <textarea 
                onClick={expandArea}
                onChange={handleChange} 
                name="content"
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
                value={note.content}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>
    );
}

export default CreateArea;