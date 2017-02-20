$(document).ready(function() {
  $("#madlib").submit(function() {
    event.preventDefault();
    $("form label").each(function(x){
      var xId = $(this).attr('for');
      $("."+xId).text($(this).siblings('input').val());
    });
    $("#story").show();
  });

  $("#self-letter form").submit(function() {
    var username = $('#user-name').val();

    $('.user-name-output').text(username);
    $('#user-name').fadeOut();
    $("#response-letter").slideDown();

    event.preventDefault();
  });

  //elements = [];
  // $('h1, p, img, input, form').on("click",function(){
  //   console.log($(this));
  // });
  // elements = ["h1", "p", "img", "input", "form"]
  // elements.forEach(function(element){
  //   $(element).click(function(){
  //     console.log("This is a(n) " + element);
  //   });
  // });
  var OGnumbers = [1,2,3,4,5];
  tmp = [];
  OGnumbers.forEach(function(OGnumber){
      tmp = (OGnumber += 1);
  });
  console.log(OGnumbers);
  console.log(tmp);
  var OGnumbers = OGnumbers.map(function(x){return x+1;});
  console.log(OGnumbers);

  console.log(OGnumbers);
  var OGnumplus = OGnumbers.map(function(x){return x+1;});
  console.log(OGnumplus);

  var OGwords = ["arnold", "palmer", "adrian", "brody"];
  var upperWords = OGwords.map(function(x){return x.toUpperCase();})
  console.log(upperWords);

  var groceriesArray = [];

  $("#groceries form").submit(function(event){
    event.preventDefault();

    groceriesArray.push($("#grocery-item").val());
    groceriesArray.sort();
    console.log(groceriesArray);
    $("#grocery-list ol").html("");
    $("#grocery-item").val("");
    groceriesArray.forEach(function(x){
      $("#grocery-list ol").append("<li>"+ x +"</li>");
    });
  });
});
