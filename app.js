$(document).ready(function() {
  // var  first_nameArray = [];
  // var  last_nameArray = [];
   var fighterData;
  // $.ajax({
  //     url: "http://cors-anywhere.herokuapp.com/",
  //     dataType: "json",
  //     type: "GET"
  //
  // }).done(function(data) {
  //     function ufcResults(data) {


    $.ajax({
        url: "http://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/fighters",
        dataType: "json",
        type: "GET"

    }).done(function(data) {
        fighterData = data;
        function ufcResults(data) {
          //
          // //loop data
          // first_name.push(data.first_name);
          // last_name = data.last_name;
          //
          //
          //
          //   var $first_name = data[0].first_name //data[i]
          //   var $last_name = data[0].last_name
        }
        //console.log(data[0].first_name + " " + data[0].last_name);
    });

    $( "#searchUFC").click(function(){
      var userInput = $( "#fighterName" ).val()
        console.log("test this button");
      console.log(userInput);
      var myFighterTable = $( "#myFighterTable")
      var userFighter = document.createElement("td");
      var addFighter = document.getElementsByClassName('.myFighters');
      //document.body.table.tbody.tr.appendChild(userFighter);
      console.log(fighterData);
      for (var i = 0; i < fighterData.length; i++) {
        if (userInput === fighterData[i].first_name ||
            userInput === fighterData[i].last_name){
          $('#myFighterTable tr:last').after(
            '<tr> <td>' + fighterData[i].first_name + " " + fighterData[i].last_name + '</td> </tr>')



        }
      }
    });



});
