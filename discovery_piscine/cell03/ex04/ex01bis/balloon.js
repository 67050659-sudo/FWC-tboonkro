const $myBalloon_Butt = $('#The_Balloon_Butt');
const $Balloon_Size = $('#Balloon_Color');

let balloonsize_inc = 200;
let color_range = 0;

const balloon_Color = ['Red' , 'Green', 'Blue'];

$myBalloon_Butt.on('click', function(){

    balloonsize_inc += 10;
    color_range += 1;

    if (color_range > 2){
        color_range = 0;
    }
    
    if (balloonsize_inc > 420){
        balloonsize_inc = 200;
    }

    Change_Balloon();
    
});

$Balloon_Size.on('mouseleave', function(){

    balloonsize_inc -= 5;

    if (balloonsize_inc < 200){
        balloonsize_inc = 200;
    }

    color_range -= 1;
    if (color_range < 0){
        color_range = 2;
    }    

    Change_Balloon();

});

function Change_Balloon(){
    $Balloon_Size.css({
        'height': balloonsize_inc + 'px',
        'width': balloonsize_inc + 'px',
        'background-color': balloon_Color[color_range]
    });
    $myBalloon_Butt.css({
        'height': balloonsize_inc + 'px',
        'width': balloonsize_inc + 'px'
    });
}