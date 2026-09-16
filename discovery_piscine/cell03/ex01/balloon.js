const myBalloon_Butt = document.getElementById('The_Balloon_Butt');
const Balloon_Size = document.getElementById('Balloon_Color');

let balloonsize_inc = 200;
let color_range = 0;

const balloon_Color = ['Red' , 'Green', 'Blue']

myBalloon_Butt.addEventListener('click', function(){

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

Balloon_Size.addEventListener('mouseleave', function(){

    balloonsize_inc -= 5;

    if (balloonsize_inc < 200){
        balloonsize_inc = 200;
    }

    color_range -= 1;
    if (color_range < 0){
        color_range = 2;
    }    

    Change_Balloon();

})

function Change_Balloon(){
    Balloon_Size.style.height = balloonsize_inc + 'px';
    Balloon_Size.style.width = balloonsize_inc + 'px';
    myBalloon_Butt.style.height = balloonsize_inc + 'px';
    myBalloon_Butt.style.width = balloonsize_inc + 'px';
    Balloon_Size.style.backgroundColor = (balloon_Color[color_range]);
}