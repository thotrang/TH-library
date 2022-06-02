export class Book{
    id: string;
    name: string;
    constructor(id: string,name: string){
        this.id=id;
        this.name=name;
    }
    get ID(){
        return this.id;
    }
    get Name(){
        return this.name;
    }
    set Name(name){
        this.name=name;
    }
}
