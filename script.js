$(document).ready(function() {
    
    function moveLeft() {
        $("#b").animate({left: "-=300"}, 1500, "swing", moveRight);
    }
    function moveRight() {
        $("#b").animate({left: "+=300"}, 1500, "swing", moveLeft);
    }
    
    moveRight();
});

// $("div").hover(function(){
//         $(this).animate({left: "-=300"});
//         }, function(){
//         $(this).css("background-color", "pink");
//     });
