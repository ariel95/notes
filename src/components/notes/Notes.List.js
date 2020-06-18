import React, { useState, useEffect } from 'react'
import Note from '../../models/Note'
import { Pen, TrashFill } from 'react-bootstrap-icons'
import Filter from './Notes.List.Filter'

const NotesList = (props) => {

    const [notesList, setNotesList] = useState(Note.GetNotes());
    const [filterValue, setFilterValue] = useState('');

    function onEditClick(elem) {
        props.setNoteSelected(elem);
    }
    function onDeleteClick(elem) {
        setNotesList(notesList.filter(function (note) { return note.id !== elem.id; }));
    }

    useEffect(() => {
        const notes = Note.GetNotes(); 
        setNotesList(notes.filter((e) => e.text.toLowerCase().includes(filterValue.toLowerCase()) || e.title.toLowerCase().includes(filterValue.toLowerCase())));
    },[filterValue])



    return (
        <div>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue}></Filter>
            <div className="notes-container" onTouchStart={(e) => { e.stopPropagation() }}>
                {
                    notesList.map((elem) =>
                        <div className="note" key={elem.id} >
                            <div className="actions">
                                <div className="edit" onClick={() => { onEditClick(elem) }}>
                                    <Pen></Pen>
                                </div>
                                <div className="delete" onClick={() => { onDeleteClick(elem) }}>
                                    <TrashFill></TrashFill>
                                </div>
                            </div>
                            <div className="title"><b>{elem.title}</b></div>
                            <div className="text">
                                <span>{elem.text}</span>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>

    );
}

export default NotesList;