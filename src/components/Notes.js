import React, { useState, useEffect } from 'react'
import '../public/css/Notes.css'
import NotesList from './Notes.List'
import Note from './Note.Edit'
import Header from './Header'

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
            <Header>
                <span>Notes</span>
            </Header>
            {renderView()}
        </div>
    );
}

export default Notes;