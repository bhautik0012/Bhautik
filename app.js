console.log('Hii I am Bhautik')

let addbtn = document.getElementById('addbtn')
addbtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = ""
    console.log(notesObj)
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
           <div class="notesCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>

        `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
// function deleteNote(index) {
//     console.log('I am Deleting', index)

//     let notes = localStorage.getItem("notes")
//     if (notes == null) {
//         notesObj = []
//     }
//     else {
//         notesObj.splice(index, 1)
//         localStorage.setItem("notes", JSON.stringify(notesObj))
//         shownotes()
//     }

//     let search = document.getElementById('searchTxt')
//     search.addEventListener("input", function () {
//         let inputVal = search.value
//         console.log('Input event fired!', inputVal)

//         let noteCards = document.getElementsByClassName('noteCard')
//         Array.from(noteCards).forEach(function (element) {
//             let cardTxt = element.getElementsByTagName("p")[0]
//             if (cardTxt.includes)
//             // console.log(cardTxt(inputVal))
//             {
//                 element.getElementsByClassName.display = "block"
//             }
//             else {
//                 element.getElementsByClassName.display = "none"
//             }

//         })


//     })

// }