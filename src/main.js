import { Admin } from "./models/Admin.js";
import { Member } from "./models/Member.js";
const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection")
// const memberSection = document.getElementById("memberContainer");
let currentUser;
userSwitcher.addEventListener('change', (e) =>{
    const selected = e.target.value;
    // console.log(selected)
    currentUser = selected === 'admin' ? new Admin("Shakil", "shakil@gmail.com") : new Member("Zahid", "zahid@gmail.com");
    // console.log(currentUser)
    bookSection.style.display = (selected === 'admin' ? 'block' : 'none');

})