import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';

const Filter = (props) => {
    // const [value, setValue] = useState('');

    return (
        <div className="notes-filter">
            <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} value={props.filterValue} onChange={(e) => props.setFilterValue(e.target.value)} />
                <label htmlFor="float-input">Search your notes</label>
            </span>
        </div>
    )
}

export default Filter;