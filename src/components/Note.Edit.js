import React, {useState} from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';

import {Editor} from 'primereact/editor';

const Note = (props) => {

    // const [id] = useState(props.data.id);
    // const [title, setTitle] = useState(props.data.title);
    const [text, setText] = useState(props.data.text);


    

    const header = (
        <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold"></button>
            <button className="ql-italic" aria-label="Italic"></button>
            <button className="ql-underline" aria-label="Underline"></button>
        </span>
    );

    return (
        <div className="note-container"  onTouchStart={(e) => { e.stopPropagation() }}>
            <div className="go-back" onClick={() => props.setNoteSelected(null)}>
                Back
            </div>
            <Editor headerTemplate={header} value={text} onTextChange={(e)=> setText(e.htmlValue)}/>
            {/* <p>Value: {text ||'empty'}</p> */}
            <div className="action-note">
                <div className="clear-note" onClick={() => setText('')}><span>Clear</span></div>
                <div className="save-note" onClick={() => alert("This action will save your text")}><span>Save</span></div>
            </div>
            
        </div>
    );

}

export default Note;