(function ($) {
  $(document).ready(function(){
    $('.pull-center-vertical').each(function() {
      $(this).css('margin-top', ($(this).parent().height()-$(this).height())/2);
    });
  });
}($));
