
//page show
function showPage(){
	document.getElementById('show_page').innerHTML = "Welcome to my Homepage";

};


//text change
function textChange(){
	document.getElementById('h3').innerHTML="Welcome to SSB";

};

//text change
function textChangeClass(){
	document.getElementsByClassName('text')[0].innerHTML="Welcome to SSB";
	
};
//text change
function textChangeDbl(){
	document.getElementsByClassName('dbl')[0].innerHTML="Welcome to SSB";

};
//text change
function textChangeMouse(){
	document.getElementsByClassName('mouse')[0].innerHTML="Welcome to SSB";

};

//text change
function textChangeMouseOut(){
	document.getElementsByClassName('mouse_out')[0].innerHTML="Welcome to SSB";

};
//text repeat
function textRepeat(){
	var data = "Hello world";

	document.getElementsByClassName('repeat')[0].innerHTML = data.repeat(3);
};

//img change
function imgChangeOne(){
	document.getElementsByClassName('change')[0].src = "images/img1.jpg";

};

function imgChangeTwo(){
	document.getElementsByClassName('change')[0].src = "images/img2.jpg";

};
//alert
function cAlert(){
	alert("page loaded successfully");

};

//alert
function cAlertWindow(){
	window.alert("Confirm Delete");

};

//Document.write output
function Window(){
	document.write("Confirm Delete");

};
//select disabled & enable
function disable(){
  document.getElementById("Select").disabled=true;
};
function enable(){
  document.getElementById("Select").disabled=false;
};
//events_onblur
function cFunction(){
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
};

//focus = change background blue
function cuFocus(){
	document.getElementById('c_focus').style.background = "blue";

};
//no focus = change background green
function cFocus(){
	document.getElementById('c_focus').style.background = "green";

};

//scroll
function scrollText(){
	document.getElementById('cscroll').innerHTML = "You scrolled in div"

};
//select text
function selectText(){
	alert("You select some text");

};

//submit text
function submitText(){
	alert("The form was submitted");

};

// operators
{let x = 5;
let y = 4;
let z = x + y;
document.getElementById("operator").innerHTML = z;}

// multiplying
{let x = 5;
let y = 3;
let z = x * y;
document.getElementById("multiplying").innerHTML = z;}

//time show
function timeShow(){
	document.getElementById('time').innerHTML=Date();

};




//Jquery
$(document).ready(function(){
alert("Welcome to Homepage");

});
//Click alert

$(document).ready(function(){

$('#alert').click(function(){
	alert("welcome to SSB")
});

});

//hide

$(document).ready(function(){

$('.im_s').click(function(){
	$('img').hide();
});

});

//Show/hide

$(document).ready(function(){

$('#hi_im').click(function(){
	$('img').hide();
});

$('.im_sh').click(function(){
	$('img').show();
});

});

//toggle

$(document).ready(function(){

$('.im_to').click(function(){
	$('img').toggle();
});

});

//fadein/fadeout

$(document).ready(function(){

$('.fa_i').click(function(){
	$('img').fadeIn();
});

$('.fa_o').click(function(){
	$('img').fadeOut();
});

});

//Slide Show

$(document).ready(function(){

$('.h2_1').click(function(){

	$('.p_1').slideToggle(1000);
});

});

//pre button
var $curr = $( "#start" );
$curr.css( "background", "#333333" );
$( "button" ).click(function() {
  $curr = $curr.prev();
  $( "div" ).css( "background", "" );
  $curr.css( "background", "#333333" );
});

//show & hide

$( "#sho_im" ).click(function() {
  $( ".sh_im" ).first().show( "fast", function showNext() {
    $( this ).next( ".sh_im" ).show( "fast", showNext );
  });
});
 
$( "#hid_im" ).click(function() {
  $( ".sh_im" ).hide( 1000 );
});

//drag 

$(document).ready(function(){

 $( "#drag" ).draggable();

});

//accordian
$(document).ready(function(){

 $( ".acco" ).accordion();

});

//tabs

$(document).ready(function(){

 $( ".tab" ).tabs();

});

//checkbox

$(document).ready(function(){

 $( "input" ).checkboxradio();

});

