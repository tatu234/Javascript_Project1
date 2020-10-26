// Create close-button
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u04FF");
  span.appendChild(txt);
  span.className = "close";
  myList[i].appendChild(span);
}

// Create a new task to list
function addNew() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputs").value;
  var x = document.createTextNode(inputValue);
  li.appendChild(x);
  if (inputValue === '') {
    alert("You need to add something!");
  } else {
    document.getElementById("addedList").appendChild(li);
  } document.getElementById("inputs").value = "";

  var span = document.createElement("span");
  var text = document.createTextNode("\u04FF");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
}}}

// Target hiding
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}}

// Adds a checkmark
var check = document.querySelector('ul');
check.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}}, false);

//Date
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleDateString();