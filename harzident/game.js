function wrong() {
    var w = document.getElementById('wrongmessage');
    var r = document.getElementById('rightmessage');
    w.style.visibility = 'visible';
    r.style.visibility = 'hidden';
    reorder();
}
function right() {
    var w = document.getElementById('wrongmessage');
    var r = document.getElementById('rightmessage');
    r.style.visibility = 'visible';
    w.style.visibility = 'hidden';
    reorder();
}

function reorder() {
  var arr = [0, 1];

  if (Math.random() > 0.5) {
    arr = [1, 0];
  }

  var main = document.getElementsByClassName("game")
  var items = main[0].children
  var elements = document.createDocumentFragment()

  arr.forEach(function(idx) {
    elements.appendChild(items[idx].cloneNode(true))
  })

  main[0].innerHTML = null
  main[0].appendChild(elements)
}
