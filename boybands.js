var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;



// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	console.log("currentBand", currentBand );
  // Add the band names into the correct <div>
  currentBand = bands [loopTracker];
  //^^ pulls loopTracker value from bands var each time loop runs.
  console.log("currentBand", currentBand);
  bandElement.innerHTML += "<div>"+currentBand+ "</div>"; //targets innerHTML of element, 
  // adds/prints new current band value with each loop.

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables [loopTracker];
  console.log("currentVeggie", currentVeggie);
  veggieElement.innerHTML += "<div>"+currentVeggie+ "</div>";

}
var loopCount 
if (bands.length > vegetables.length) {
	var loopCount = bands.length;

} else {
  var loopCount = vegetables.length;
}

///// Joe's solution

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?) Use longer array for loop...
var loopCount = bands.length > vegetables.length ? bands.length: vegetables.length 
//if bands.length > veg.length, var loopCount = bands.length. Else loopCounter = vegetables.length


// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

// Add the band names into the correct <div>
  currentBand = bands [loopTracker];
  //^^ pulls loopTracker value from bands var each time loop runs.
  console.log("currentBand", currentBand);
  bandElement.innerHTML += "<div>"+currentBand+ "</div>"; 
  //^^^targets innerHTML of element, 
  // adds/prints new current band value with each loop.

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables [loopTracker];
  console.log("currentVeggie", currentVeggie);
  if (currentVeggie !== undefined) { 
  veggieElement.innerHTML += "<div>"+currentVeggie+ "</div>";
	}

}














