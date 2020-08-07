// books info
var x = document.getElementById("book-1");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myFunctionTwo);

function myFunction() {
    document.getElementById("info-1").style.display = "block";
}

function myFunctionTwo() {
    document.getElementById("info-1").style.display = "none";

}
var x = document.getElementById("book-2");
x.addEventListener("mouseover", myFunction2);
x.addEventListener("mouseout", myFunctionTwo2);

function myFunction2() {
    document.getElementById("info-2").style.display = "block";
}

function myFunctionTwo2() {
    document.getElementById("info-2").style.display = "none";

}
var x = document.getElementById("book-3");
x.addEventListener("mouseover", myFunction3);
x.addEventListener("mouseout", myFunctionTwo3);

function myFunction3() {
    document.getElementById("info-3").style.display = "block";
}

function myFunctionTwo3() {
    document.getElementById("info-3").style.display = "none";

}
var x = document.getElementById("book-4");
x.addEventListener("mouseover", myFunction4);
x.addEventListener("mouseout", myFunctionTwo4);

function myFunction4() {
    document.getElementById("info-4").style.display = "block";
}

function myFunctionTwo4() {
    document.getElementById("info-4").style.display = "none";

}