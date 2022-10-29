// // As one line
document.addEventListener("DOMContentLoaded", function (){
    let p= document.getElementById('text')
    p.textContent='This is really cool!'
});

// // Defining the call back outside the event listener
// document.addEventListener("DOMContentLoaded", function(){
//     console.log('After!');
//     findText();
// });

// function findText(){
//     let p= document.getElementById('text')
//     p.innerHTML='This is really cool!'
// };

// console.log("Before!")
