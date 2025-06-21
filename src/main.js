import { Admin } from "./models/Admin.js";
import { Member } from "./models/Member.js";
import { Book } from "./models/book.js";
import { LibrarySystem } from "./services/LibraryService.js";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection")
const borrowedSection = document.getElementById("borrowedBooksSection");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList")

let currentUser
const library = new LibrarySystem();
userSwitcher.addEventListener('change', (e) =>{
    const selected = e.target.value;
    // console.log(selected)
    currentUser = selected === 'admin' ? new Admin("akhi", "akhi@gmail.com") : new Member("Ahmad", "ahmad@gmail.com");
    // console.log(currentUser)
    bookSection.style.display = (selected === 'admin' ? 'block' : 'none');
    borrowedSection.style.display = (selected === 'member' ? 'block' : 'none')
    renderBooks();
})
// From Functionality
bookForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const book = new Book(title, author, genre)
    library.addBook(book);
    renderBooks();
    bookForm.reset();
    // console.log(book)
})
function renderBooks(){
    bookList.innerHTML = "";
    library.getAllBooks().forEach((book) => {
        const li = document.createElement('li');
        let controls = '';
        if(currentUser.getRole() === 'Member' && book.isAvailable){
            controls = `<button  class="btn btn-outline btn-accent mt-4 rounded-2xl">Borrow</button>`;
        }else if(currentUser.getRole() === 'Admin'){
            controls = `<span>${book.isAvailable ? 'Available' : 'Borrowed'}</span>`;
        }
        // console.log(li)
        li.innerHTML = `
            <div>
                <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
            </div>
            ${controls}
        `;
        
        bookList.appendChild(li); 
    })
}
// Initial Rendering
bookSection.style.display = 'none'