// Animate the Label
// ****************************************

$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });
  
  // Add .is-send class
  // ****************************************
  
  $('#contact-send').click(function(){
    $(this).parents('.form-wrapper').addClass('is-sent');
    setTimeout(function(){
      $('.form-wrapper').removeClass('is-sent');  
    }, 3600);
  });

