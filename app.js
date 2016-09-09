$(document).ready(function() {
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

                    }
                });

                $("#searchUFC").click(function() {
                    var userInput = $("#fighterName").val()
                        
                    var myFighterTable = $("#myFighterTable")
                    var userFighter = document.createElement("td");
                    var addFighter = $('.myFighters')

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
