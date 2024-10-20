filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery");
  if (c == "Yee") c = "";
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
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
document.addEventListener("DOMContentLoaded", function() {
var btnContainer = document.getElementById("btnid");
var btns = btnContainer.getElementsByClassName("btn01");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}});

//modal picture
document.addEventListener("DOMContentLoaded", function(){
	document.querySelectorAll('.gallery img').forEach(image =>{
	image.onclick=()=>{
		document.querySelector('.popup-img').style.display = 'block';
		document.querySelector('.popup-img img').src=image.getAttribute('src');
	};
	
	});
	
	document.querySelector('.popup-img span').onclick=()=>{
		document.querySelector('.popup-img').style.display = 'none';
	}
})