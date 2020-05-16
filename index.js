


$(document).ready(function(){


  $searchbar = $("#search-bar");
  $titles = $('.title');

 


$.getJSON("icon_data.json",function( json ) {
   
    fillIcons('.student-services',json.studentServices) 
    fillIcons('.staff-services',json.staffServices) 
    fillIcons('.account-management',json.accountManagement) 
    fillIcons('.public-services',json.publicServices) 
 }).done(function() {

  $('.loading-screen').remove();
  $('.main-panel').removeClass('disabled');
 
})
.fail(function() {
 $('.loading-screen').find('.loading-text').find('h5').text('server error');
 $('.loading-screen').find('.loading-icon').remove();
 
})
.always(function() {
 
 
});

   const fillIcons = (title, objectArray) =>{

    objectArray.forEach( function(object,index){
    newCard = $('#card-templete').clone();

    $(newCard).removeAttr('id');
    $(newCard).find('.card-title').html(object.title);
    $(newCard).find('.card-text').html(object.description);
    $(newCard).find('.card-icon').addClass(object.icon);
    $(newCard).find('.card-footer').find('.card-url').attr("href", object.URL);
    $(title).closest('div').find('.card-panel').append(newCard);
    })
  }
 
 


  $searchbar.on("keyup", function() {

   

    var value = $(this).val().toLowerCase();
    $filteredCards = $('.card-panel').find('.card').filter(function() {
      $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
      $(this).toggle($(this).find('.card-text').text().toLowerCase().indexOf(value) > -1);

    });

   $titles.each(function(index,element) {
    number = $(element).closest('div').find('div.card:visible').length;
   (number > 0) ? $(element).show() : $(element).hide();  
   });

   ($("div.card:visible").length === 0) ?   $("#no-result").removeClass('disabled') :  $("#no-result").addClass('disabled');

  
  }); 




 
 

 
})

