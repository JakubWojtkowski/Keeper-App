import React from "react";

function CreateArea(props){

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
    }

    return (
    <div>
        <form>
            <input
                onChange={handleChange} 
                name="title"
                placeholder="Title"
                value={note.title}
            />
            <textarea 
                name="content"
                placeholder="Take a note..."
                rows="3"
            />
            <button type="submit">Add</button>
        </form>
    </div>
    );
}

export default CreateArea;