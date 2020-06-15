class Note {
    constructor(){
        this.title = "";
        this.note = "";
    }    

    GetNotes(){
        const list = [];
        //TODO: DB fetch
        for (let index = 0; index < 10; index++) {
            let n1 = new Note();
            n1.title="Title " + (index+1);
            n1.note="Text " + (index+1);
            list.push(n1);
        }
        return list;
    }
}

export default new Note();