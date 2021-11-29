// document.addEventListener("DOMContentLoaded", () => {
//     console.log("The DOM has loaded");
// });

// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// )

document.addEventListener('DOMContentLoaded', textEdit);

function textEdit() {
    let text = document.querySelector('#text');
    text.textContent = 'This is really cool!';
}