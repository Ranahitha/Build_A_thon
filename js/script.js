function showSignup(){
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
document.getElementById("signupForm").addEventListener("submit",function(e){
    e.preventDefault();
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful! Please Login");
    showLogin();
});

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");

if(email === storedEmail && password === storedPassword){

// redirect directly to homepage
window.location.href = "home.html";

}else{

alert("Invalid Email or Password");

}

});
document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Your Tourist Guide has been booked successfully!");

});