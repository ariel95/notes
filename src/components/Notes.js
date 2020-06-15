import React from 'react'
import '../public/css/Notes.css'
import Menu from './Menu'
import Note from '../models/Note'

const Notes = () => {

    const notesList = Note.GetNotes();

    return (
        <div id="notes" className="background-o-y">
            <Menu></Menu>
            <h1>Notes</h1>
            <div className="notes-container" onTouchStart={(e) => {e.preventDefault(); e.stopPropagation()} }>
                {
                    notesList.map((elem) =>
                        <div className="note" >
                            <div className="title"><b>{elem.title}</b></div>
                            <div className="text">
                                <span>{elem.note}</span>
                            </div>
                        </div>
                    )
                }
                <div className="note">
                    <div className="title"><b>Title 1</b></div>
                    <div className="text">
                        <span>I'm a note 1</span>
                    </div>
                </div>
                <div className="note">
                    <div className="title"><b>Title 2</b></div>
                    <div className="text">
                        <span>I'm a note 2</span>
                    </div>
                </div>
                <div className="note">
                    <div className="title"><b>Titel 3</b></div>
                    <div className="text">
                        <span>I'm a note 3</span>
                    </div>
                </div>
                {/* Editor de texto
                        https://primefaces.org/primereact/showcase/#/editor 
                 */}
            </div>
        </div>
    );
}

export default Notes;