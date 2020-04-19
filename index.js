$("#search-bar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
  

 
   $filteredCards = $('.card').filter(function() {
      $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
    });

    $filteredTitles = $filteredCards.parents().children().find('.title').hide();
    
  });