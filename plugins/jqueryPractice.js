console.log("Welcome to jQuerry library")

// === ID ===
//$("#red");

// #id method key value
$("#red").css("color","red").css("background-color", "black");
$("#blue").css("color","blue").css("background-color", "#ffcc00");
$("#pink").css("color","pink").css("background-color", "purple");

// == CLASS ==

$(".title-two").css("color","green").css("font-size","48px");
// add a border to the paragraph

$(".with-border").css("border", "3px dashed black");

$(".my-border").click(function(){
    console.log("my border was ckicked");
    $(this).css("color", "blue").css("border","3px dashed black");
    $(this).addClass("error");
    
})

// === TAGS ===
$("h3").css("background-color", "gray").css("cursor","poimter");

let myTitle =$("h3");

myTitle.mouseover(function(){
    $(this).css("background-color", "green")
});

myTitle.mouseleave(function(){
    $(this).css("background-color", "lightgray");
})
