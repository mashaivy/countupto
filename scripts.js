$(document).ready(function(){
  $("form#countnumber").submit(function(event){
  event.preventDefault();
  var numInput = parseInt($("input#count").val());
  var multInput= parseInt($("input#multiple").val());
for (var index = 0; index <= numInput; index += multInput){
  console.log("working");
  $("#results").append(index);
}
console.log(numInput);
















});
});
