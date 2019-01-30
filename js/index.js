// Your code goes here

// mouseover & mouseout -- changes header image

const changeHeader = document.querySelector('img');

changeHeader.addEventListener('mouseout', () => {
    changeHeader.src = "img/fun-bus.jpg"
}); 

changeHeader.addEventListener('mouseover', () => {
    changeHeader.src = "img/miss-frizzle.jpg"
});


// click - change first button color 
let changeHomeBtn = document.getElementById('homeBtn');
    changeHomeBtn.addEventListener('click', e => {
    changeHomeBtn.style.backgroundColor = 'red';
});


// double click - change size of second button
let changeAboutBtn = document.getElementById('aboutBtn');
    changeAboutBtn.addEventListener('dblclick', e => {
    changeAboutBtn.style.borderColor = "blue";    
});

