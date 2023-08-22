// function displayData() {
//     var name = document.getElementById("name").value;
//     var Surname = document.getElementById("Surname").value;
//     var date = document.getElementById("date").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;

//     console.log("Name: " + name);
//     console.log("lastName: " + Surname);
//     console.log("date: " + date);
//     console.log("phone: " + phone);
//     console.log("email: " + email);
// }


// var form = {
//     name: "",
//     Surname: "",
//     date: "",
//     phone: "",
//     email: ""
// };


// function updateform() {
//     form.name = document.getElementById("name").value;
//     form.Surname = document.getElementById("Surname").value;
//     form.date = document.getElementById("date").value;
//     form.phone = document.getElementById("phone").value;
//     form.email = document.getElementById("email").value;
// }


// function displayData() {
//     updateform();
//     console.log("Data:", form);
// }


function myfun() {

    var n1 = document.getElementById('demo1').value
    // document.getElementById("demo2").innerHTML = n1;
    const cardList = document.getElementById("card-list");
    const card = `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Note</h5>
                    <p>${n1}</p>
                    <a href="#" class="btn btn-primary">Delete</a>
                </div>
            </div>`
    cardList.insertAdjacentHTML("beforeend", card)


}
