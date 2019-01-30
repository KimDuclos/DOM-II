// Your code goes here

// mouseover -- changes header image to Ms. Frizzle
// mouseout -- changes lets image go back to Fun Bus

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


// keydown shrinks blog button
let changeBlogBtn = document.getElementById('blogBtn');
    changeBlogBtn.addEventListener('keydown', e => {
    changeBlogBtn.style.width = "0px";   
    changeBlogBtn.style.height = "0px";
});


// mouse wheel turns contact button black
let changeContactBtn = document.getElementById('contactBtn');
    changeContactBtn.addEventListener('wheel', e => {
    changeContactBtn.style.backgroundColor = "black";   
});


// changes the font color of the first sign up button when the mouse moves over it
let changeSignUp1 = document.getElementById('signUp1');
    changeSignUp1.addEventListener('mousemove', e => {
    changeSignUp1.style.color = "black";
});

// right clicking expands border to really huge width
let changeSignUp2 = document.getElementById('signUp2');
    changeSignUp2.addEventListener('contextmenu', e => {
    changeSignUp2.style.borderWidth = "40px";
});

//