



//line 12-22
.done(function(data) {
        // function ufcResults(data) {
        nextFight = data;
        // };

        for (var i = 0; i < nextFight.length; i++) {
            if (nextFight[i].event_date === date.now() {
                    alert("There is a UFC event on tody!")
                }
            };
        });











//data is the returned infomation from the JASON
// var first_name = data.first_name;
// var last_name = data.last_name;
// var userInput = $( "#fighterName" ).val()
// console.log(data);
// console.log(first_name);
//  for (var i = 0; i < data.length; i++) {
//    if (data.val() === data[i].first_name || data[i].last_name){
//       console.log(data[0].first_name);
// };


  //data[i]
};
  // console.log(data);
});
//     $( "#searchUFC").click(function(){
//         console.log("test this button");
//     var userInput = $( "#fighterName" ).val()
//       console.log(userInput);
//     })
//
});

// $("#searchUFC").click(searchUFC);
//     var $fighterName = $("#fighterName");
//     function searchUFC(){
//       var name = $fighterName.val();
  //alert("search UFC: " + nickname);




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













$(document).ready(function(){

var $title = $('<h1>');
$title.text('Fighter Tracker');
$('body').append($title);


var $input = $('<input>');
$input.attr('placeholder',"Search for Fighter")


var $ul = $('<ul>');
var $button = $('<button id = add_fighter>')
$button.text('Search for Fighter');
$('body').append($input);
$('body').append($ul);
$('body').append($button);
input.on('change', function (ev){
  var fighterName = $(ev.target).val();
  var $newItem = $('<li>');


});


 var $form = $('.form');

 $form.on('click', '.button', function(event) {
   event.preventDefault();
   var $fighter = $('input').val();
   $('.results').text('');
   console.log('test for Q1 project');


   $.ajax({
     url:"http://ufc-data-api.ufc.com/api/v3/us/fighters" + $fighter
   }).done(function(data){
     // $('body').append($list);

     if(data.Search){
       data.Search.forEach(function(fighter) {
         var $list =$("<ul>");
         var $list2 =$('<li>');
         $list2.text(first_name.last_name);
         $list.append($list2);
         $('.results').append($list)

     })} else {
     $('.results').text('Please enter a UFC fighter name');
   }})``

         });
   });











// $('document').ready(function(){
// //console.log("TESTING for project 1");
// var $title = $('<h1>');
// $title.text('Fighter Tracker');
// $('body').append($title);
//
//
// var addFighterToFavorites.ajax({
//   url: 'http://ufc-data-api.ufc.com/api/v3/us/',
//   dataType: 'json'
// })
//
// addFighterToFavorites.done(function(data){
//   console.log()
// })
//
//
// var $input = $('<input>');
// $input.attr('placeholder',"Search for Fighter")
//
//
// var $ul = $('<ul>');
// var $button = $('<button id = add_fighter>')
// $button.text('Add Fighter');
// $('body').append($input);
// $('body').append($ul);
// $('body').append($button);
// input.on('change', function (ev){
//   var fighterName = $(ev.target).val();
//   var $newItem = $('<li>');
//
//
//
//   });
//
//
// });
//
//
//
// // var $input = $('<input>').attr({
// //                                 'id' : 'toDoTask' ,
// //                                 'type' : 'text',
// //                                 'name' : 'todo',
// //                                 'placeholder' : 'what do you need to do?'
// //                               })
//
// // $button.on('click', function() {
// //   var fighterName = $input.val();
// //   var newItem = $('<li>');
// //   $ul.append($newItem);
// // });
//
// // $newItem.text(taskName);
// // $ul.append($newItem);
