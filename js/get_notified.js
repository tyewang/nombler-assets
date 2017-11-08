(function ($) {
  $(document).ready(function(){
    $('input, textarea').change(function() {
      if ($('#name').val() && $('#email').val() && $('#find_out').val()) {
        $('.submit-button').removeClass('disabled');
        $('.submit-button').prop('disabled', false);
        $('.submit-button').val('Submit');
        $('.submit-button').focus();
      }
    });
    $('form').submit(function(e){
      $('.submit-button').val('');
      $('.submit-button').addClass('submitting');
      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd1ReAyzkNIn0jfJxVUZ7vNT1sA5yfVNl0BmmHJavaW4IxRog/formResponse',
        data: $('form').serialize(),
        complete: function () {
          // we don't care about error or success since we're blocked from viewing the response by CORS
          $('.submit-button').removeClass('submitting');
          $('.submit-button').addClass('submitted');
          $('.submit-button').prop('disabled', true);
          $('.submit-button').val("Thanks! We'll be in touch :)");
        }
      });
      e.preventDefault();
    });
  });
}($));
