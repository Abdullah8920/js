var btn = document.getElementById("increase");
// console.log(btn)

var heading = document.querySelector("h1");
// console.log(heading)

btn.addEventListener("click", function inc() {
    // alert("hello respone plz>>>>>>>>>>>>>>", inc)
    var currentsize = parseInt(heading.style.fontSize)
    heading.style.fontSize = (currentsize + 4) + "px";
})

