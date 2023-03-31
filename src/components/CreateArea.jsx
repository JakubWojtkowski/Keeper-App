import React from "react";

function CreateArea(){
    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Title" />
                <textarea name="content" placeholder="Take a note..." />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateArea;