$(document).ready(function(){

  $searchbar = $("#search-bar");
  $titles = $('.title');
  $cards = $('.card');

  $('#no-result').hide();

  $.getJSON("icon_data.json",function( json ) {
    $titles.each(function(index,element){

      $(element).text(Object.keys(json)[index]);
    })
   
   });



  $searchbar.on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $filteredCards = $cards.filter(function() {
      $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
      $(this).toggle($(this).find('.card-text').text().toLowerCase().indexOf(value) > -1);

    });

  
  

   $titles.each(function(index,element) {
    number = $(element).closest('div').find('div.card:visible').length;
   (number > 0) ? $(element).show() : $(element).hide();  
   });

   ($("div.card:visible").length === 0) ?   $("#no-result").show() :  $("#no-result").hide();
  
     
    

  
  }); 

  
 

 
})