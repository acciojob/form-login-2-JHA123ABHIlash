//your JS code here. If required.

let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let phone=document.querySelector("#phone");
let email=document.querySelector("#email");
let btn=document.querySelector("button");

btn.addEventListener("click", function(){
	alert(`First Name:${fname.value}Last Name:${lname.value}Phone Number:${phone.value}Email ID:${email.value}`);
});

