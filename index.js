$(document).ready(function(){

  $searchbar = $("#search-bar");

  $searchbar.on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $filteredCards = $('.card').filter(function() {
      $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
      $(this).toggle($(this).find('.card-text').text().toLowerCase().indexOf(value) > -1);

    });

    
   
    
  }); 

  
})