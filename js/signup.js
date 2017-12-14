(function ($) {
  $(document).ready(function(){
    $('input').on('keypress', function() {
      var requiredFields = [
        '#name',
        '#email',
        '#username',
        '#password'
      ];

      var shouldAllowSubmit = requiredFields.reduce(function(accumulator, field) {
        return accumulator && !!$(field).val();
      }, true);

      if (shouldAllowSubmit) {
        $('.submit-button').removeClass('disabled');
        $('.submit-button').prop('disabled', false);
        $('.submit-button').val('Submit');
      }
    });
  });
}($));
