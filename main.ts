import { Book } from "./book";
import{BookManager} from "./managerBook"

let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let arrBooks= new BookManager();
arrBooks.addBook(book1);
arrBooks.addBook(book2);
arrBooks.addBook(book3);
console.log(arrBooks);

arrBooks.showList();

arrBooks.update('B001','Lập trình Javascript');
console.log(arrBooks.showList());

arrBooks.deleteBook('B001');
console.log(arrBooks.showList());