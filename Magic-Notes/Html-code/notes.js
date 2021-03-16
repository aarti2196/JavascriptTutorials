// If user add a note, add it to the localstorage
console.log('Hii Note');
shownotes();
let addBtn = document.getElementById('mybtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    shownotes();
})
// Function to show elements from local storage
function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">Your Note ${index + 1}</h5>
             <p class="card-text">${element}</p>
             <button href="#" id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">
             Delete Note</button>
         </div>
     </div>
         `
    });
    let noelm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noelm.innerHTML = html;
    }
    else {
        noelm.innerHTML = `Nothing to show! Add a note Section above to add notes`
    }

}

// Function to delete a Note 
function deleteNote(index) {
    console.log('I am deleting this note', index);
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
        notesobj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesobj)); // update local storage
        shownotes();
    }
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal =search.value.toLower;
    console.log('Search event Fired',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.display = "none";
        }
    })
})