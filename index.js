var gamepattern=[];
var buttoncolors=["red","blue","green","yellow"];
var userClickedPattern=[];
var started=false;
var level=0;

function playsound(name) {
   var autochosen = new Audio("./sounds/"+ name+".mp3");
   autochosen.play();
}
function nextsequence() {
   userClickedPattern=[];
   level++;
   $("h1").text("Level"+level+"");
   var randomnumber= Math.floor(Math.random()*4);
   
   var randomchosencolor=buttoncolors[randomnumber];
   gamepattern.push(randomchosencolor);
   playsound(randomchosencolor);
   $("#"+randomchosencolor).fadeOut(100).fadeIn(100);
  
   
}
$(".btn").on('click', function(){
   
   var buttonkeycolor=$(this).attr('id');
   
   var aud=new Audio("./sounds/"+ buttonkeycolor+".mp3");
   aud.play();
   $("#"+buttonkeycolor).addClass("pressed");
   setTimeout(function(){
      $("#"+buttonkeycolor).removeClass("pressed");
   },100)
   userClickedPattern.push(buttonkeycolor);
   checkanswer(userClickedPattern.length-1);
});
$(document).keypress(function (){
   

   if(!started){
      $("h1").text("level"+level )
      nextsequence();
      started=true;
   }
   
   
});
function checkanswer(currentlevel){
if(gamepattern[currentlevel]===userClickedPattern[currentlevel]){
   console.log("sucess");
   if(userClickedPattern.length===gamepattern.length){
      setTimeout(function (){
         nextsequence();
         
      },1000)
   }
}
else{
   console.log("wrong");
   
   $("h1").text("Game Over, Press Any Key to Restart");
   var aud2=new Audio("./sounds/wrong.mp3");
   aud2.play();
   $("body").addClass("game-over");
   setTimeout(function(){
      $("body").removeClass("game-over");
   },200);
   startover();
}

}
function startover(){
   gamepattern=[];
   started=false;
   level=0;
}