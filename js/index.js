// Your code goes here

// mouseover & mouseout -- changes header image

var changeHeader = document.querySelector('img');

changeHeader.onmouseout = function () {
    this.src = "img/fun-bus.jpg";
}
changeHeader.onmouseover = function () {
    this.src = "img/miss-frizzle.jpg";
}

