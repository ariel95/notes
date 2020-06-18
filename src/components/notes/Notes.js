import React, { useState, useEffect } from 'react'
import '../../public/css/Notes.css'
import List from './List'
import Edit from './Edit'
import Header from '../Header'
import Container from '../Container'
import Menu from '../Menu'
import Dropdown from 'react-bootstrap/Dropdown'
import Note from '../../models/Note'
const Notes = () => {

    const [noteSelected, setNoteSelected] = useState(null);

    useEffect(() => {
        console.log(noteSelected);
    }, [noteSelected])

    function renderView() {
        if (noteSelected === null) {
            return <List setNoteSelected={setNoteSelected}></List>
        }
        else {
            return <Edit setNoteSelected={setNoteSelected} data={noteSelected}></Edit>
        }
    }

    function onClickNewNote(e) {
        let newNote = new Note();
        newNote.id = -1;
        setNoteSelected(newNote);        
    }

    return (
        <div id="notes" className="background-o-y">
            <Header>
                <span>Notes</span>
                <Menu>
                    <Dropdown.Item onClick={onClickNewNote}>New note</Dropdown.Item>
                </Menu>
            </Header>
            <Container>
                {renderView()}
            </Container>

        </div>
    );
}

export default Notes;