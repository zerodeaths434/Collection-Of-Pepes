var searchBar = document.getElementById("myInput");
let searchedItem = "";
var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("myImage");
var modalImg = document.getElementById("modalImages");
var captionText = document.getElementById("caption");


searchBar.addEventListener("keyup", (e) => {
  searchedItem = e.target.value;
  filterSelection(searchedItem.toLowerCase())


})

for (var i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}



var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeShowClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addShowClass(x[i], "show");
    }
  }
}

function addShowClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeShowClass(element, name) {
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

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}