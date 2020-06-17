import React, {useState} from 'react'
import Note from '../models/Note'
import {Pen} from 'react-bootstrap-icons'

const NotesList = (props) => {

    const [notesList,setNotesList] = useState(Note.GetNotes());

    function onEditClick(elem) {
        props.setNoteSelected(elem);
        
    }

    return(
        <div className="notes-container" onTouchStart={(e) => {e.stopPropagation()} }>
                {
                    notesList.map((elem) =>
                        <div className="note" key={elem.id} >
                            <div className="actions">
                                <div className="edit" onClick={() => {onEditClick(elem)}}>
                                    <Pen></Pen>
                                </div>
                            </div>
                            <div className="title"><b>{elem.title}</b></div>
                            <div className="text">
                                <span>{elem.note}</span>
                            </div>
                        </div>
                    )
                }
                {/* Editor de texto
                        https://primefaces.org/primereact/showcase/#/editor 
                 */}
            </div>
    );
}

export default NotesList;