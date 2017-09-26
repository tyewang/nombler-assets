(function ($) {
  $(document).ready(function(){
    $("#map_file").change(function() {
      if(this.value){
        $('#submit').attr('disabled', false);
      }
    });
    $("#map-url").change(function() {
      $(this).removeClass('error');
      const regexResult = this.value.match(/^https:.*google\.com.*?.*id=([A-Za-z0-9_-]+)/);
      if(regexResult) {
        const map_id = regexResult[1];
        const url = `https://www.google.com/maps/d/kml?mid=${map_id}&forcekml=1`;
        $("#download-link").html(`<a href='${url}'>Click here to download your KML file!</a>`);
        $('#download-link').show();
      }
      else {
        $('#download-link').hide();
        $(this).addClass('error');
      }
    });
  });
}($));
