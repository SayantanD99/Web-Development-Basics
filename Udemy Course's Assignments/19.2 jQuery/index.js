$(document).ready(function(){ // ready function is needed if you use the jquery script in the head of the html
    $("h1").click(function(){
        $("body").css("background-color", "white"); //if jquery is used in body then only these lines would be enough to show the same output
        $("h1").addClass("big-title margin-50");
    });    
    $("button").text("Don't Click Me");
    
    $("button").click(function(){
        $("button").text("You Anyway Clicked It !");
        $("h1").css("color", "purple");
        $("a").text("DuckDuckGo");
        $("a").attr("href", "https://duckduckgo.com/");
        $("h1").fadeToggle();
    });

    $("input").keypress(function(event){
        $("h1").text(event.key);
        $("h1").animate({opacity: 0.5}); //custom animation
    });

    $("h1").on("mouseover", function(){ //on function can be used as a event handler, first parameter is the actual function we want to use and the second parameter is the function event
        $("h1").css("color", "green");
    });

});
