window.onload= function(e){
    var selection = $("#WeatherSelection");
    selection.change(function(e){ console.log(e.currentTarget);
        var form = $("#Selector");
            var data =$("#WeatherSelection").val();
            console.log(data);
            var link = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + data + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
                $.get(link, function(data){
                var weather = data.query.results.channel.item.condition.text;
                console.log(weather);
                form.submit( function(e){
                    e.preventDefault();
                    console.log('inside here');
                    var Result = $("#result");
                    Result.html("The weather is currently:"+" " + weather);
                    if(weather === "Sunny"){
                        var color = "#589CFC";
                        text = "#4b4b4b"
                        var image = 'url("Images/giphycopy.gif")';}
                    if(weather === "Mostly Sunny"){
                        var color = "#7FCFEF";
                        text = "#4b4b4b"
                        var image = 'url("Images/1b55ce1065f07fc7833813cffa6da5fc.gif")';}
                    if(weather === "Partly Cloudy"){
                        var color = "#99E9F6";
                        var image = 'url("source.gif")';}
                        text="#4b4b4b";
                    if(weather === "Mostly Cloudy"){
                        var color = "#FFFFFF";
                        var image = 'url("Images/cloudtest001.gif")'
                        text = "black";}
                    $("#Title").css({"background-color": color, "background-image": "url()", "color": text});
                    Result.css("background-image", image);
                    temperature = data.query.results.channel.item.condition.temp;
                    time = data.query.results.channel.item.condition.date
                    $("#Temperature").html("As of " + time + ", " + "it is " + temperature + " Degrees Fahrenheit")
                    $("#Temperature").css("color", text)})})})}

