
$("a").click(function(event){
    event.preventDefault();
});

$(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle();
    });
});

// *READ MORE, READ LESS SECTION* 


// Click Read More, See Additonal Text

$(".readmore a").click(function(){
   $("p").slideDown();
});

// Click Read More, Hide "Read More" Text"

$(".readmore a").click(function(){
   $(".readmore a").hide();
});

// Show Read Less

$(".readless a").click(function(){
  $("a").show();
  $("p.readless").slideUp();
  $("p.hide").slideUp();
});

// Click Read Less, 
// Hide "Read Less" and Addtional Text

//$(".readless a").click(function(){
//   $("p.readless").slideUp();
//   $("p.hide").slideUp();
   
//});


// *LEARN MORE SECTION* 


// Click Learn More, Show Additional Text

$(".relaxr-category-sidebar p a").click(function(){
   $("p span").slideDown();
   $(".relaxr-category-sidebar p a").hide();
});

//Hide Learn More

//$(".relaxr-category-sidebar p a").click(function(){  
  //$(".relaxr-category-sidebar p a").hide();
//});