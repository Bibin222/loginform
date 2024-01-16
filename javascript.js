
function valid()
{
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
let confirmpass=document.getElementById("confirmpass").value
if(email=="")
    {
        alert("Enter a valid email id")
    }
    if(pass=="")
        {
            alert("Enter a password")
        }
    if(pass.length<8&&pass.length>0)
        {
        alert("Entered password is too short please enter a password greater than 8 digits")
        }

if(pass != confirmpass)  
{   
alert("Passwords did not match");  
} else {  
alert("Password created successfully");  
}  
}  
