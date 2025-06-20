import { Admin } from "./models/Admin.js";
import { Member } from "./models/Member.js";
import { Book } from "./models/book.js";
const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection")
const borrowedSection = document.getElementById("borrowedBooksSection");
const bookForm = document.getElementById("bookForm");

let currentUser;
userSwitcher.addEventListener('change', (e) =>{
    const selected = e.target.value;
    // console.log(selected)
    currentUser = selected === 'admin' ? new Admin("Shakil", "shakil@gmail.com") : new Member("Zahid", "zahid@gmail.com");
    // console.log(currentUser)
    bookSection.style.display = (selected === 'admin' ? 'block' : 'none');
    borrowedSection.style.display = (selected === 'member' ? 'block' : 'none')
})
// From Functionality
bookForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const genre = document.getElementById("genre");
    const book = new Book(title, author, genre)
    console.log(book)
})
// Initial Rendering
bookSection.style.display = 'none'