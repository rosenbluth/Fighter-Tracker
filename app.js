$(document).ready(function() {
    $.ajax({
        url: "http://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/fighters",
         dataType: "json",
         type: "GET"

    }).done(function(data) {
      function ufcResults(data){
        var $first_name = data[0].first_name //data[i]
        var $last_name = data[0].last_name
      }
      console.log(data[0].first_name + " " + data[0].last_name);
});
});
