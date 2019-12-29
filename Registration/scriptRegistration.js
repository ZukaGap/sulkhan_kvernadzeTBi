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
    var x = [ NameIn, SNameIn, IdIn, PhoneIn, EmailIn ]
    var check = 0;
    for(var y = 0; y < x.length; y++ )
    {
        if(x[y].value.length === 0)
        {
            x[y].style.border = "1px solid red"; 
            check++; 
        }            
    }   

    if(!check && IdIn.value.length === 11 )    
        document.location = '../Passed/Passed.html';   
    else
        IdIn.style.border = "1px solid red";
}