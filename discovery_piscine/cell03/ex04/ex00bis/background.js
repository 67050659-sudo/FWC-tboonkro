const $myButton = $('#Le_Button');
const $myBack = $('#Le_Back');

$myButton.on('click', function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $myBack.css('background-color', randomColor);
});