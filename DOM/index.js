var btninc = document.getElementById("increase");
var btndec = document.getElementById("decrease");
var btnReset = document.getElementById("reset");

// console.log(btn)

var heading = document.querySelector("h1");
// console.log(heading)
var defaultSize = 30;

btninc.addEventListener("click", function inc() {
    // alert("hello respone plz>>>>>>>>>>>>>>", inc)
    var currentsize = parseInt(heading.style.fontSize)
    heading.style.fontSize = (currentsize + 4) + "px";
})
btndec.addEventListener("click", function dec() {
    var currentsize = parseInt(heading.style.fontSize)
    heading.style.fontSize = (currentsize - 2) + "px";
})

btnReset.addEventListener("click", function reset() {
    heading.style.fontSize = defaultSize + "px";
});
