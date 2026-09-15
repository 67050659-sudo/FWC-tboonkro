const myButton = document.getElementById('Le_Button');
const myBack = document.getElementById('Le_Back')

myButton.addEventListener('click', function(){
    
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    myBack.style.backgroundColor = randomColor;

});