(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
function myFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}
function myFunction5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}
function myFunction6() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
}
function myFunction7() {
    var popup = document.getElementById("myPopup7");
    popup.classList.toggle("show");
}
function myFunction8() {
    var popup = document.getElementById("myPopup8");
    popup.classList.toggle("show");
}
function myFunction9() {
    var popup = document.getElementById("myPopup9");
    popup.classList.toggle("show");
}
