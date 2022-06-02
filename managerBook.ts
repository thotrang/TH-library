import { Book } from "./book";

export class BookManager {
    books: Book[] = []
    constructor() {

    }
    addBook(book: Book) {
        this.books.push(book);
    }
    showList() {
        return this.books;
    }
    findBook(id: string) {
        let index=-1;
        for(let i=0;i<this.books.length;i++){
            if(id==this.books[i].id){
                index=i;
            }
        }return index;
    }
    deleteBook(id: string) {
        let index=this.findBook(id);
        if(index!=-1){
          this.books.splice(index,1);  
        }else{
            console.log("delete error");
        }
    }
    update(id:string, name:string) {
        let index=this.findBook(id);
        if(index!=-1){
        this.books[index].Name = name;  
            
          }else{
              console.log("update error");
          }
    }

}