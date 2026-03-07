function searchPlace() {

let input = document.getElementById("search").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.includes(input)) {
        cards[i].style.display = "inline-block";
    } else {
        cards[i].style.display = "none";
    }
}
}
document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Tourist Guide Booked Successfully!");

});