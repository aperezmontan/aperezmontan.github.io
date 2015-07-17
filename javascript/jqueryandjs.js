$(document).ready(function(){

  $(".submenu").hide();

  subMenuDrop('#aboutMeButton','#aboutMeMenu')
  subMenuDrop('#projectsButton','#projectsMenu')
  subMenuDrop('#blogButton','#blogMenu')

  switchContent('#aboutMeButton','aboutme.html','GET')
  switchContent("#myStoryButton",'mystory.html', 'GET')
  switchContent("#likesButton",'likes.html', 'GET')
  switchContent("#lovesButton",'loves.html', 'GET')
  switchContent('#entraButton','entra.html','GET')
  switchContent('#flashyButton','flashycards.html','GET')
  switchContent('#blogButton','blog.html','GET')

})

var subMenuDrop = function(selector, showHTML){
  $(selector).on('click',function(){
      $(".submenu:visible").slideToggle( "slow" );
      $(showHTML).slideToggle( "slow" );
  });
}

var switchContent = function(selector, url, method){
  $(selector).on('click', function(event){
    event.preventDefault();
    $.ajax({
        method: method,
        url: url
      })
      .done(function ( response ) {
        console.log(response)
        $('.mainContentContainer').slideUp("slow", function(){
          $('.mainContentContainer').html(response).hide(function(){
            $('.mainContentContainer').slideToggle( "slow" );
          });
        });
    })
  })
}

