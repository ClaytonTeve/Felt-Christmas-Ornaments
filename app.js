//Colors are stored in a global variable to be used while ordering a custom bird.

var mainBodyColor = $('.mainBodyColor').val('background-color');
var wingsColor = $('.wingsColor').val('background-color');
var innerWingColor = $('.innerWingColor').val('background-color');
var mainThreadColor = $('.mainThreadColor').val('background-color');
var secondaryThreadColor = $('.secondaryThreadColor').val('background-color');
var accentThreadColor = $('.accentThreadColor').val('background-color');



//Make arrays of colors for the felt and thread colors. 

var feltColors = ['#ff0000', '#00ff00', '#0000ff', '#fff000','#ffffff']
var threadColors = ['#000', '#000', '#000']



//this function add the colors to the color-picker boxes
function propColors ( list , location ) {
  for (var i = 1; i <= list.length; i += 1) {
  	//Add a list item for each color in stock.
   $("<li></li>").appendTo(location);
   //Change background color of list items added to color in stock.
   $(location +' li:nth-child('+i+')').css('background-color', list[i-1])
	};
};

//Adds the felt colors used for the birds body to the document.
$(document).ready(propColors(feltColors,".bird-body ul"));

//Adds the thread colors used for the birds body to the document.
$(document).ready(propColors(threadColors, ".thread ul"))

//Changes which color is selected on each part of the bird
//by adding the selected class to the list item clicked.

//Main Body Color
$(".main-body-select li").click(function(){
	//Remove class "selected" from sibling elements
	$(this).siblings().removeClass("selected");
	//Add class "selected" to clicked element
	$(this).addClass("selected");
	//store color here
	mainBodyColor = $(this).css("background-color");
	//Changes fill color of the main-body class in the SVG of the bird.
	$(".main-body").css("fill", mainBodyColor);
});

//Wings Color
$(".wings-select li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//store color here
	wingsColor = $(this).css("background-color");

	$(".wings").css("fill", wingsColor);
});

//Inner Wing Color
$(".inner-wing-select li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//store color here
	innerWingColor = $(this).css("background-color");

	$(".inner-wing").css("fill", innerWingColor);
});

//Main Thread Color
$(".main-thread-select li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//store color here
	mainThreadColor = $(this).css("background-color");

	$(".detail").css("fill", mainThreadColor);
});

//Secondary Thread Color
$(".secondary-thread-select li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//store color here
	secondaryThreadColor = $(this).css("background-color");

	$(".secondary-color").css("fill", secondaryThreadColor);
});

//Accent Thread Color
$(".accent-thread-select li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//store color here
	accentThreadColor = $(this).css("background-color");

	$(".primary-color").css("fill", accentThreadColor);
});




