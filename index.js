


$(document).ready(function(){


  $searchbar = $("#search-bar");
  $titles = $('.title');
 

  $('#no-result').hide();
  $('.title').hide();

$.getJSON("icon_data.json",function( json ) {
    $('.title').show();
    fillIcons('.student-services',json.studentServices) 
    fillIcons('.staff-services',json.staffServices) 
    fillIcons('.account-management',json.accountManagement) 
    fillIcons('.public-services',json.publicServices) 
 }).done(function() {
  $('.title').show();
 
})
.fail(function() {
  $('.spinner-border ').parent().append('<h2>Server error</h2>')
 
})
.always(function() {
  $('.spinner-border').remove();
});

   const fillIcons = (title, objectArray) =>{

    objectArray.forEach( function(object,index){
    newCard = $('#card-templete').clone();

    $(newCard).removeAttr('id');
    $(newCard).children('.card-body').find('.card-title').html(object.title);
    $(newCard).children('.card-body').find('.card-text').html(object.description);
    $(newCard).children('.card-icon').addClass(object.icon);
    $(newCard).children('.card-footer').find('.card-url').attr("href", object.URL);
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

   ($("div.card:visible").length === 0) ?   $("#no-result").show() :  $("#no-result").hide();

  
  }); 




 
 

 
})

