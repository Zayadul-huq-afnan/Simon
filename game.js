
var buttonColors = ["red" , "yellow" , "green" , "blue"];

var gamePattern = [];

var userChosenPattern = [];

var started = false;

var level = 0;

$(document).keydown(function(){

    if(!started){
        // $(".title").text("Level " + level);
        started = true;
        gameSequence();
    }
})

$(".button").click(function(){

    var clickedButton = $(this).attr("id");

    userChosenPattern.push(clickedButton);
    animate(clickedButton);
    playSound(clickedButton);

    check(userChosenPattern.length-1);
})


function check(currentLevel){

    if(userChosenPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("checking");
        if(userChosenPattern.length == gamePattern.length){
            console.log("matched");
            setTimeout(function(){
                gameSequence();
            }, 2000);
        }
    }
    else{
        
        $(".title").text("Game Over");

        gamePattern.length = 0;
        userChosenPattern.length  = 0;
        level = 0;
        setTimeout(function(){
            $(".title").text("Press any key to start the game");
            started = false;
        } , 2000)
    }
}

function gameSequence(){

    userChosenPattern.length = 0;
    level +=1;

    $(".title").text("Level " + level);
    var num = Math.floor(Math.random()*4);
    var choseColor = buttonColors[num];
    gamePattern.push(choseColor);

    // $("#" + choseColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // console.log(choseColor);
    
    animate(choseColor);

    playSound(choseColor);

    // checkPattern();
}

function animate(clickedButton){

    $("#" + clickedButton).addClass("pressed");

    setTimeout(function(){
        $("#" + clickedButton).removeClass("pressed");
    }, 150);

}


function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");

    audio.play();
}


// function checkPattern(){

//     userChosenPattern.length = 0;

//     var ind = 0;
//     var tmp1 = 0;
//     for(var ind = 0 ; ind < level ; ind+=1) {
        
//         $(".button").click(function(){

//             var clickedButton = $(this).attr("id");
        
//             userChosenPattern.push(clickedButton);
//             animate(clickedButton);
//             playSound(clickedButton);

//             console.log("loop 1");
//             tmp1 += 1;
            
//             if(tmp1 == level){
//                 console.log("here");
//                 check();
//             }
//         })

//     }

//     // if(ind == level-1){
//     //     console.log("loop 3");
//     //     check();
//     // }

// }


// function check(){
//     var flag = true;

//     for(var i = 0 ; i < level ; i++){
//         // console.log(userChosenPattern[i]);
//         // console.log(gamePattern[i]);
//         console.log("loop 2");
//         if(userChosenPattern[i] != gamePattern[i]){
//             flag = false;
//             break;
//         }
//     }

//     if(flag == true){
//         gameSequence();
//     }
// }



