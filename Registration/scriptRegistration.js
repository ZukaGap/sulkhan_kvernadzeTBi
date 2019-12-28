var SubmitBTN = document.getElementById("Submit");
var NameIn = document.getElementById("Name");
var SNameIn = document.getElementById("Surname");
var IdIn = document.getElementById("Id");
var PhoneIn = document.getElementById("Phone");
var EmailIn = document.getElementById("Email");


// SubmitBTN.addEventListener("click", function(){
//     alert(NameIn.value.length);
// });

function Enroll(){
    if(NameIn.value.length &&
        SNameIn.value.length &&
        IdIn.value.length &&
        PhoneIn.value.length &&
        EmailIn.value.length)
    {
        document.location = '../Passed/Passed.html';
    }
}