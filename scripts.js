$(document).ready(function(){
  $("form#buttontest").submit(function(event){
    var userinput = $("input").val();
    console.log(userinput);
    alert(userinput);
  });
});
