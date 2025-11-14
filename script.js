//your JS code here. If required.

let fname=document.querySelector("#fname").value;
let lname=document.querySelector("#lname").value;
let phone=document.querySelector("#phone").value;
let email=document.querySelector("#email").value;
let btn=document.querySelector("button");

btn.addEventListener("click", function(){
	alert(`First Name:${fname.value}Last Name:${lname.value}Phone Number:${phone.value}Email ID:${email.value}`);
});

