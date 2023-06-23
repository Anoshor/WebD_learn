

$(document).ready(function(){
    ///write here if u use jQuery inside head
});


$("h1").css("color","red"); // dot method- setting value
console.log($("h1").css("color"));  //getting value

// $("h1").addClass("big-title"); // space with multiple classes
// alert("LMAO");
// $("h1").removeClass("big-title");

// $("h1").hasClass(" ");  //returns boolean

$("button").text("Dont click me");
// $("button").html("<em>HEYYY</em>");

$(document).keypress(function(event){
    $("h1").text(event.key);
});

//manipulating attributes