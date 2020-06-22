import React, { useState, useEffect } from 'react'
import {GetNotes} from '../../api/Note'
import { TrashFill } from 'react-bootstrap-icons'
import Filter from './Filter'
import MenuFooter from '../MenuFooter'

const NotesList = (props) => {

    const [notesList, setNotesList] = useState(GetNotes());
    const [filterValue, setFilterValue] = useState('');
    const [timeOut, setTimeOut] = useState(0);
    const [isMenuHiding, setIsMenuHiding] = useState(false);
    const [isMenuShowed, setIsMenuShowed] = useState(false);
    const menuFooter = document.getElementById('menu-footer');
    const app  = document.getElementById('app');
    
    function deleteNote(id){
        //console.log(id);
    }

    function onEditClick(elem) {
        props.setNoteSelected(elem);
    }
    function onDeleteClick() {
        
        console.log("Se borrarán: ");
        let els = app.getElementsByClassName('notes-container')[0].getElementsByClassName('selected');
        Array.prototype.forEach.call(els, function(el) {
            deleteNote(el.id);
        });
        
    }

    useEffect(() => {
        const notes = GetNotes(); 
        setNotesList(notes.filter((e) => e.text.toLowerCase().includes(filterValue.toLowerCase()) || e.title.toLowerCase().includes(filterValue.toLowerCase())));
    },[filterValue])


    function onTouchStartNote(target, elem) {
        let classes = target.classList;
        if(!classes.contains('note')){
            onTouchStartNote(target.parentElement, elem);
            return;
        }
        
        if(!isMenuShowed){
            var time = setTimeout(() => {
                menuFooter.classList.remove('hide');
                app.classList.add('menu-footer');
                classes.add('selected');
                // console.log(notesSelected);
                // notesSelected.push(elem.id);
                // console.log(notesSelected);
                setIsMenuShowed(true);
            }, 1000);
            setTimeOut(time);
        }
        else{
            if(!classes.contains('selected')){
                classes.add('selected')
            }
            else{
                classes.remove('selected');
                if(document.getElementsByClassName('notes-container')[0].getElementsByClassName('selected').length === 0){
                    menuFooter.classList.add('hide');
                    app.classList.remove('menu-footer');
                    setIsMenuShowed(false);
                    setIsMenuHiding(true);
                }            
            }
        }
        
    }
    function onTouchEndNote(target, elem) {
        clearTimeout(timeOut);    
        let classes = target.classList;
        if(!classes.contains('note')){
            onTouchEndNote(target.parentElement, elem);
            return;
        }

        if(!isMenuShowed && !isMenuHiding){
            onEditClick(elem);
        }
        else{
            setIsMenuHiding(false);
        }
        
          
    }

    return (
        <div className={props.className}>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue}></Filter>
            <div className="notes-container" onTouchStart={(e) => { e.stopPropagation() }}>
                {
                    notesList.map((elem) =>
                        <div className="note" key={elem.id} id={elem.id} onTouchEnd={(e) => onTouchEndNote(e.target,elem)} onTouchStart={(e) => onTouchStartNote(e.target, elem)} >
                            <div className="title"><b>{elem.title}</b></div>
                            <div className="text">
                                <span>{elem.text}</span>
                            </div>
                        </div>
                    )
                }

            </div>
            <MenuFooter className="hide">
                {/* <div className="edit">
                    <Pencil></Pencil>
                </div> */}
                <div className="delete" onClick={onDeleteClick}>
                    <TrashFill></TrashFill>
                </div>
            </MenuFooter>
        </div>

    );
}

export default NotesList;