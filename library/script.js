const addButn = document.getElementById("add");
const dialog_window = document.getElementById("input");
const input_form = document.querySelector("#input>form")
const form_close = document.getElementById("close_dialog")
const submit_form = document.getElementById("submit_dialog")
const displayButn = document.getElementById("display")

const pad_body = document.getElementById("body");

addButn.addEventListener('click', ()=>{ dialog_window.showModal(); })

displayButn.addEventListener("click", () => display(myLibrary))

form_close.addEventListener('click', (e)=> {closeDialog(e)})

submit_form.addEventListener('click', (e)=> {retriveValues(e)})


pad_body.addEventListener("click", (e) => {

    if(e.target.matches(".removeBtn")){
        removeValue(e)
    }
    
    if(e.target.matches(".readIndi")){
        changeRead(e)
    }
})


function retriveValues(event){
    event.preventDefault();
    let temp_name = document.querySelector("#book_name").value
    let temp_author = document.querySelector("#book_author").value
    let temp_pages = document.querySelector("#book_pages").value
    let temp_read = document.querySelector("#book_read").value

    let output = new book(temp_name, temp_author, temp_pages, temp_read)

    addBookToLibrary(output);
    input_form.reset()
    dialog_window.close()
}

function closeDialog(event){
    event.preventDefault();
    dialog_window.close()
}


function removeValue(event){
    bookTitle = event.target.parentElement.querySelector("h1").textContent;
    removeBookFromLibrary(bookTitle);
    display(myLibrary);
}

function changeRead(event){
    bookTitle = event.target.parentElement.querySelector("h1").textContent;
    objIndex = myLibrary.findIndex((obj => obj.title == bookTitle));
    if(myLibrary[objIndex].read === "yes"){
        myLibrary[objIndex].read = "no"
    }else{
        myLibrary[objIndex].read = "yes"
    }
    display(myLibrary)
}

let myLibrary  = [];

function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read =read
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function removeBookFromLibrary(bookName){
    myLibrary = myLibrary.filter(obj=>{return obj.title !== bookName})
}


function display(library){
    pad_body.innerHTML = "";


    library.forEach(book => {
        let pad = document.createElement('div');
        pad.classList.add("pad")

        let removeBtn = document.createElement('button');
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "Remove";

        let readIndicator = document.createElement('button');
        readIndicator.classList.add("readIndi");

        let title = document.createElement('h1');
        let author = document.createElement("h2");
        let pages = document.createElement("h2");

        title.textContent = book.title;
        author.textContent = "By: " + book.author;
        pages.textContent = "Pages: "+ book.pages;

        

        if(book.read === "yes"){
            readIndicator.textContent = "Read";
            readIndicator.setAttribute("style", "background-color:green;")
        }else{
            readIndicator.textContent = "Not Read";
            readIndicator.setAttribute("style", "background-color:red;")
        }
        


        pad.appendChild(title);
        pad.appendChild(author);
        pad.appendChild(pages);
        pad.appendChild(removeBtn);
        pad.appendChild(readIndicator);



        pad_body.append(pad) 
    });
}



const testBook = new book("The Coronation", "Services", "55", "yes")

addBookToLibrary(testBook)