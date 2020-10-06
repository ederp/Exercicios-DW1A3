
function soma(){
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var total = document.getElementById('total');
  total = a + b;

  total.innerHTML =total;
}
