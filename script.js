console.log("loaded")
var a = $("#thing-one")
var product = $("#sum")
var input = $(".input")
var results = $("#list")
var list = [""]

function multiplication (arg1) {
  console.log("called")
  var c = arg1*arg2
  product.html(c)
  list.push(" " + c)
  results.html(list.toString())
}

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var aval = a.val()
    console.log("enter")
    multiplication(aval)
  }
})
