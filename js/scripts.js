
$(document).ready(function(){
var flavorARR =['Mint', 'vanilla', 'chocolate', 'caramel'];

flavorARR.forEach(function(add_name) {
  $('ul#listIcecream').append('<li>'+ add_name +'</li>');
  console.log(add_name);
});

});
