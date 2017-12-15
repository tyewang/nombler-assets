(function ($) {
  var setupGoogleLogin = function() {
    gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
        client_id: '954394665198-fnkvnsjg2ad94rdakagv9qfsp45r8j9j.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      auth2.attachClickHandler(
        document.getElementById('google-social-login'),
        {},
        function(googleUser) {
          console.log("Signed in: " + googleUser.getBasicProfile().getName());
        },
        function(error) {
          alert(JSON.stringify(error, undefined, 2));
        }
      );
    });
  };


  $(document).ready(function(){
    setupGoogleLogin();
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
