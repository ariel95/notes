class Note {
    constructor(){
        this.title = "";
        this.text = "";
        this.id = -1;
    }    

    GetNotes(){
        const list = [];
        //TODO: DB fetch
        let n2 = new Note();
            n2.id = 99;
            n2.title="Finish my homework";
            n2.text="Today I have to finish my homework becouse";
            list.push(n2);
            let n3 = new Note();
            n3.id = 100;
            n3.title="Go shopping";
            n3.text="Buy milk, meat, yogurt and water";
            list.push(n3);
        for (let index = 0; index < 5; index++) {
            let n1 = new Note();
            n1.id = index+1;
            n1.title="Title " + (index+1);
            n1.text="Text " + (index+1);
            list.push(n1);
        }
        return list;
    }
}

export default new Note();