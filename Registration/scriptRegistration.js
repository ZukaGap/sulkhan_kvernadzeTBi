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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = [ NameIn, SNameIn, IdIn, PhoneIn, EmailIn ];
    var checkArr = [ NameIn.value.length > 1, SNameIn.value.length > 3,
         IdIn.value.length === 11, PhoneIn.value.length === 9,
         EmailIn.value.match(mailformat) ];

    var check = 0;
    for(var y = 0; y < x.length; y++ )
    {
        if(checkArr[y] === false || checkArr[y] === null)
        {
            x[y].style.border = "1px solid red"; 
            check++; 
        }           
        else
            x[y].style.border = "1px solid chartreuse";
    }
    if(!check)    
        document.location = '../Passed/Passed.html';
}