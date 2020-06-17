import React, { useState, useEffect } from 'react'
import '../public/css/Notes.css'
import Menu from './Menu'
import NotesList from './Notes.List'
import Note from './Note.Edit'

const Notes = (props) => {

    const [noteSelected,setNoteSelected] = useState(null);

    useEffect(() => {
        console.log(noteSelected);
    },[noteSelected])

    function renderView() {
        if(noteSelected === null){
            return <NotesList setNoteSelected={setNoteSelected}></NotesList>
        }
        else{
            return <Note setNoteSelected={setNoteSelected} data={noteSelected}></Note>
        }
    }

    return (
        <div id="notes" className="background-o-y">
            <Menu></Menu>
            <h1>Notes</h1>
            {renderView()}
        </div>
    );
}

export default Notes;