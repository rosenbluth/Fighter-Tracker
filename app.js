$(document).ready(function() {
    $.ajax({
        url: "http://ufc-data-api.ufc.com/api/v3/us/fighters",
        dataType: "json",
        type: "GET"

    }).done(function(data) {
        console.log(data);
    });
    $( "#searchUFC").click(function(){
        console.log("test this button");
    var userInput = $( "#fighterName" ).val()
      console.log(userInput);
    })

});





//When user types in a name that matches a fighter name, first or last name, then
//return the matched info from JSON
//Search function will trigger when user clicks the search button after the name is typed in.

//We need to return the JSON from the Ajax call
  //first_name, last_name etc.
//We need the input from the user

//Wirte a for loop that interates through the array of JSON data
//Write an if statement inside the loop that says if the val input matches the first_name or
//last_name to return the JSON data. Just object that matches that name


//   $(init);
//
//   function init()
//
//   {
//     $("#searchUFC").click(searchUFC);
//     var $fighterName = $("#fighterName");
//     function searchUFC(){
//       var name = $fighterName.val();
//         alert("searchUFC: " + nickname);
//
//         $.ajax({
//           url: "http://ufc-data-api.ufc.com/api/v3/us/fighters",
//           dataType: "json",
//           type:"GET",
//           success: function(response){
//             console.log(response);
//           });
//
//         }
//
// var fighterJson = {"id":2,"wins":19,"statid":27,"losses":11,"last_name":"Couture","weight_class":"Light_Heavyweight","title_holder":false,"draws":0,"first_name":"Randy","fighter_status":"ReleasedFromPromotion","thumbnail":"http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRandy-Couture%252FRandy-Couture_2_medium_thumbnail.png?-mw300-mh300-tc1","belt_thumbnail":"http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRandy-Couture%252FRandy-Couture_2_FighterBelt_70.png?-w300-h300-tc1"}
//
//     }
//     document.append.fighterJson.body
//   });
//









//  var fighterJson = {"id":2,"wins":19,"statid":27,"losses":11,"last_name":"Couture","weight_class":"Light_Heavyweight","title_holder":false,"draws":0,"first_name":"Randy","fighter_status":"ReleasedFromPromotion","thumbnail":"http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRandy-Couture%252FRandy-Couture_2_medium_thumbnail.png?-mw300-mh300-tc1","belt_thumbnail":"http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRandy-Couture%252FRandy-Couture_2_FighterBelt_70.png?-w300-h300-tc1"}
//
//   // run functions on that json
//   // build profile image based on hard coded data
//
//
//   console.log("testinggggg");
//   var $title = $('<h1>');
//   $title.text('Fighter Tracker');
//   $('body').append($title);
// });
