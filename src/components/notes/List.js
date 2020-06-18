import React, { useState, useEffect } from 'react'
import {GetNotes} from '../../api/Note'
import { Pen, TrashFill } from 'react-bootstrap-icons'
import Filter from './Filter'

const NotesList = (props) => {

    const [notesList, setNotesList] = useState(GetNotes());
    const [filterValue, setFilterValue] = useState('');

    function onEditClick(elem) {
        props.setNoteSelected(elem);
    }
    function onDeleteClick(elem) {
        setNotesList(notesList.filter(function (note) { return note.id !== elem.id; }));
    }

    useEffect(() => {
        const notes = GetNotes(); 
        setNotesList(notes.filter((e) => e.text.toLowerCase().includes(filterValue.toLowerCase()) || e.title.toLowerCase().includes(filterValue.toLowerCase())));
    },[filterValue])

    return (
        <div className={props.className}>
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