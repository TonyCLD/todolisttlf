console.log(moment().format(` LLL`));
var currentDay = moment().format(` LLL`);
$('#currentDay').html(moment().format(`LLL`));

//upon page load, check the time, if that time is past, color is grey. If it's current
//color is turquoise, future is dusty rose
// C4D12A FUTURE
// BAC6EE presenttlf
// 3C5ABE past
// .input-group-text {
//     background-color: #9eb1d0;
//     /* Main text area */
//   }
// moment().format('HH');#63b2c1
// background-color: #9eb1d0;
// background-color: #7c90af;

var currenthour = moment().format('HH');
$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 5) {
    $("#h5am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 5) {
    $("#h5am").css({"background-color":"#9fae8e"});}
    else {
    $("#h5am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 6) {
    $("#h6am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 6) {
    $("#h6am").css({"background-color":"#9fae8e"});}
    else {
    $("#h6am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 7) {
    $("#h7am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 7) {
    $("#h7am").css({"background-color":"#9fae8e"});}
    else {
    $("#h7am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 8) {
    $("#h8am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 8) {
    $("#h8am").css({"background-color":"#9fae8e"});}
    else {
    $("#h8am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 9) {
    $("#h9am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 9) {
    $("#h9am").css({"background-color":"#9fae8e"});}
    else {
    $("#h9am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 10) {
    $("#h10am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 10) {
    $("#h10am").css({"background-color":"#9fae8e"});}
    else {
    $("#h10am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 11) {
    $("#h11am").css({"background-color":"#7c90af"});}
    if (currenthourEl === 11) {
    $("#h11am").css({"background-color":"#9fae8e"});}
    else {
    $("#h11am").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 12) {
    $("#h12pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 12) {
    $("#h12pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h12pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 13) {
    $("#h1pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 13) {
    $("#h1pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h1pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 14) {
    $("#h2pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 14) {
    $("#h2pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h2pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 15) {
    $("#h3pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 15) {
    $("#h3pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h3pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 16) {
    $("#h4pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 16) {
    $("#h4pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h4pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 17) {
    $("#h5pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 17) {
    $("#h5pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h5pm").css({"background-color":"#abc093"});    
    }
});

$(document).ready(function() {
    var currenthourEl = parseInt(currenthour);
    // var currenthourEl = currenthour;
    console.log(currenthourEl); console.log(currenthour);
    if (currenthourEl < 18) {
    $("#h6pm").css({"background-color":"#7c90af"});}
    if (currenthourEl === 18) {
    $("#h6pm").css({"background-color":"#9fae8e"});}
    else {
    $("#h6pm").css({"background-color":"#abc093"});    
    }
});