//EVENT AFTER CLICK demo OR code BUTTON IN THE PROJECT SECTION
var btns = document.querySelectorAll(".button")
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        console.log(current)
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });

}