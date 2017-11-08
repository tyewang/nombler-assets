(function ($) {
  $(document).ready(function(){
    $('input, textarea').change(function() {
      if ($('#name').val() && $('#email').val() && $('#find_out').val()) {
        $('.submit-button').removeClass('disabled');
        $('.submit-button').prop('disabled', false);
        $('.submit-button').val('Submit');
      }
    });
    $('form').submit(function(e){
      $('.submit-button').val('');
      $('.submit-button').addClass('submitting');
      setTimeout(function() {
        $('.submit-button').removeClass('submitting');
        $('.submit-button').addClass('submitted');
        $('.submit-button').prop('disabled', true);
        $('.submit-button').val("Thanks! We'll be in touch :)");
      }, 2000);
      e.preventDefault();
    });
  });
}($));
