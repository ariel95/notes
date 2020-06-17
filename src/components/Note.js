import React, {useState} from 'react'

const Note = (props) => {

    const [id] = useState(props.data.id);
    const [title, setTitle] = useState(props.data.title);
    const [text, setText] = useState(props.data.text);

    return(
        <div>
                {
                    id + " - " + title + " - " + text
                }
        </div>
    );
}

export default Note;