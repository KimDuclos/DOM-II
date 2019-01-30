// Your code goes here

// 1. mouseover -- changes header image to Ms. Frizzle
// 2. mouseout -- changes lets image go back to Fun Bus

const changeHeader = document.querySelector('img');

changeHeader.addEventListener('mouseout', () => {
    changeHeader.src = "img/fun-bus.jpg"
}); 

changeHeader.addEventListener('mouseover', () => {
    changeHeader.src = "img/miss-frizzle.jpg"
});


// 3. click - change first button color 
let changeHomeBtn = document.getElementById('homeBtn');
    changeHomeBtn.addEventListener('click', e => {
    changeHomeBtn.style.backgroundColor = 'red';
});


// 4. double click - change border color of second button
let changeAboutBtn = document.getElementById('aboutBtn');
    changeAboutBtn.addEventListener('dblclick', e => {
    changeAboutBtn.style.borderColor = "blue";    
});


// 5. keydown shrinks blog button
let changeBlogBtn = document.getElementById('blogBtn');
    changeBlogBtn.addEventListener('keydown', e => {
    changeBlogBtn.style.width = "0px";   
    changeBlogBtn.style.height = "0px";
});

// add preventDefault to Contact Button
document.getElementById('contactBtn').addEventListener('click', e => {
    event.preventDefault();
});

// 6. mouse wheel turns contact button black
let changeContactBtn = document.getElementById('contactBtn');
    changeContactBtn.addEventListener('wheel', e => {
    changeContactBtn.style.backgroundColor = "black";   
});


// 7. changes the font color of the first sign up button when the mouse moves over it
let changeSignUp1 = document.getElementById('signUp1');
    changeSignUp1.addEventListener('mousemove', e => {
    changeSignUp1.style.color = "black";
});

// 8. right clicking expands border to really huge width
let changeSignUp2 = document.getElementById('signUp2');
    changeSignUp2.addEventListener('contextmenu', e => {
    changeSignUp2.style.borderWidth = "40px";
});


// 9. form triggers alert window when clicked
const form = document.querySelector('.submit')
form.addEventListener('click', e => {
    alert('You submitted your form. Cool beans.');
    e.stopPropagation();
});

// 10. When clicked, changes the test color in the first name box of the form
const subBtn = document.querySelector('.fName')
subBtn.addEventListener('focus', e => {
    subBtn.style.color = 'orange';
});


//stop propagation demo when clicked
//click the destination container and contained submit button to produce
//alert boxes which will show stop Propagation working

const destinationBox = document.getElementById('funInTheSun');
destinationBox.addEventListener('click', e => {
    alert('You clicked the Fun In the Sun box!');
});

const destSignUpBtn = document.getElementById('signUp1');
    destSignUpBtn.addEventListener('click', e => {
    alert('You clicked the destination sign up button!')
    e.stopPropagation();
});