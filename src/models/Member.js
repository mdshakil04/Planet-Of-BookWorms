import { User } from "./User.js";
export class Member extends User {
  constructor(name, email) {
    super(name, email);
  }
   borrowBook(book){

   }
   returnBook(bookId){
    
   }

  getRole() {
    return "Member";
  }
}
