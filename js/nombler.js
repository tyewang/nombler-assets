(function ($) {
  $(document).ready(function(){
    $('.pull-down').each(function() {
      $(this).css('margin-top', ($(this).parent().height()-$(this).height())/2);
    });
  });
}($));
