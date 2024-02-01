// Code copied from W3Schools with slight changes
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterFoods");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
}
// Add Functionality to the surprise button
  function surpriseSelection() {
    var allFilterFoods = document.getElementsByClassName("filterFoods");
    
    // Remove the "show" class from all elements
    for (var i = 0; i < allFilterFoods.length; i++) {
        allFilterFoods[i].classList.remove("show");
    }

    // Get a random index within the range of the elements
    var randomIndex = Math.floor(Math.random() * allFilterFoods.length);

    // Add the "show" class to the randomly selected element
    allFilterFoods[randomIndex].classList.add("show");
}

// Add an event listener to the "Surprise" button
var surpriseButton = document.querySelector(".moodSurprise .btn-single");
if (surpriseButton) {
    surpriseButton.addEventListener("click", surpriseSelection);
}
