// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//     alert("i got clicked");
// }



// var numberofdrumbutton=document.querySelectorAll(".drum").length;
// for(var i=0;numberofdrumbutton;i++)
// or
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("i got clicked");
//     });
// }

// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//          var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//     });
// }
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         this.style.color="black";              
                                                                
//                                         //  document.querySelector("this").style.color="magenta"; this is wrong
        
        
//         // console.log(this.innerHTML);
//     });
// }

// this for music when presing with mouse
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         
        makesound(this.innerHTML);
        buttonanimation(this.innerHTML);
        

    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})
function makesound(key){
    switch(key)
        {
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            
            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;    
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                console.log(buttoninnerhtml);
            }


}

function buttonanimation(currentkey)
{
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    }, 100);
}







