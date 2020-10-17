// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

$("h1").addClass("big-title margin-50");

$("h1").text("Bye!!");

//$("button").text("Do not click-me");
//same as:
//$("button").html("<em>Hey<em>");

//console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function(){
//     $("h1").css("color", "red");
// })

// for (var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", 
//     function(){
//         document.querySelector("h1").style.color =  "yellow";
//     });
// }

//Same as this in jquery:

$("button").click(function(){
    $("h1").css("color", "black");
});

// $("body").keypress(function(event){
//     console.log(event.key);
// });

$("body").keypress(function(event){
    $("h1").text(event.key);
 });

 $("h1").on("mouseover", function(){
     $("h1").css("color", "red");
 })

//  $("h1").before("<button>New</button>");
// S.fn.init [h1.big-title.margi-50.margin-50, prevObject: S.fn.init(1)]
// $("h1").after("<button>After</button>");
// S.fn.init [h1.big-title.margi-50.margin-50, prevObject: S.fn.init(1)]
// $("h1").prepend("<button>prepend</button>");
// S.fn.init [h1.big-title.margi-50.margin-50, prevObject: S.fn.init(1)]
// $("h1").append("<button>append</button>");
// S.fn.init [h1.big-title.margi-50.margin-50, prevObject: S.fn.init(1)]
// $("button").remove;
// ƒ (e){return Re(this,e)}
// $("button").remove();

// $("button").on("click", function(){
//     $("h1").hide();
// });

// $("button").on("click", function(){
//     $("h1").show();
// });
// $("button").on("click", function(){
//     $("h1").toggle();
// });

// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:"0.5"});
});