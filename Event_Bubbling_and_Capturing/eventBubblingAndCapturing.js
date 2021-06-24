document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log("Grand Parent Clicked");
}, false)//bubling
document.querySelector('#parent')
    .addEventListener('click', (e) => {
        console.log("Parent Clicked");
        e.stopPropagation();
}, false)//bubling
document.querySelector('#child')
    .addEventListener('click', () => {
        console.log("child Clicked");
}, false)//bubling