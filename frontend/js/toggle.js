const image = document.getElementById("user-image");
const nameText = document.getElementById("user-name");
const genderText = document.getElementById("gender");
const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", function () {

    if (genderText.textContent === "Male") {

        image.src = "../images/jane.png";
        nameText.textContent = "Jane Doe";
        genderText.textContent = "Female";

    } else {

        image.src = "../images/john.png";
        nameText.textContent = "John Doe";
        genderText.textContent = "Male";

    }

});

// var users=[
//     {
//         "name": "John Doe";
//         "gender": "Male";
//         "image": "/images/john.pgn";
//     },
//     {
//         "name":"Jane Doe";
//         "gender": "Female";
//         "image":"/images/jane.png";
//     }
// ]
// var curid=0;
// function toggle(){
//       //toggle curid from o -> 1 & 1-> 0
//     curid=(curid+1)%2
//       //toggle the rendered user details

//       //image
//     var user=users[curid];
//     document.getElementById("user-image").src=""
// }