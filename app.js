$(document).ready(function() {
            // var  first_nameArray = [];
            // var  last_nameArray = [];
            var fighterData;
            var nextFight;
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/iphone/events",
                dataType: "json",
                type: "GET"

            })
                $.ajax({
                    url: " https://galvanize-cors-proxy.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/fighters",
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

                $("#searchUFC").click(function() {
                    var userInput = $("#fighterName").val()
                        //console.log("test this button");
                        //console.log (typeof userInput);
                    var myFighterTable = $("#myFighterTable")
                    var userFighter = document.createElement("td");
                    var addFighter = $('.myFighters')
                        //var addFighter2 = document.getElementsByClassName('myFighters');
                        //document.body.table.tbody.tr.appendChild(userFighter);
                        //console.log(fighterData);
                    for (var i = 0; i < fighterData.length; i++) {
                        if (userInput.toLowerCase() === fighterData[i].first_name.toLowerCase() ||
                            userInput.toLowerCase() === fighterData[i].last_name.toLowerCase()) {
                            $('#myFighterTable tr:last').after(
                                '<tr> <td>' +
                                fighterData[i].first_name +
                                " " +
                                fighterData[i].last_name +
                                '</td><td>' + fighterData[i].nickname +
                                '</td><td> <img src="' + fighterData[i].thumbnail + '"/>' +


                                '</td><td>' + fighterData[i].weight_class +
                                '</td><td>' + fighterData[i].wins +
                                '</td><td>' + fighterData[i].losses +
                                '</td><td>' + fighterData[i].draws +

                                '</td> </tr>')



                        }
                    }
                });


            });
