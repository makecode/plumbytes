$(document).ready(function() {
  var $language = $('.language'),
      $languageEl = $('.language__el');

  //Language
  $language.hover(function(){
    $(this).toggleClass('is-open');
  });

  $languageEl.click(function(){
    $languageEl.removeClass('is-active');
    $(this).toggleClass('is-active');
  });

});