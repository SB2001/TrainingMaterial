window.onload= function(e){
    var submission = $("#submission");
    var temp = {};
    var form = $("#catSub");
    form.submit(function(e){
        e.preventDefault();
        var data = $("#CatB").val();
        if (data==""){
            alert("Please enter a response");
        }
        else{
            temp["CatBreed"]= data;
            console.log(temp["CatBreed"]);
            submission.innerHTML = "Submited!"
        }
    }
    );
    $.get("http://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data, status){
    console.log(data, status);
    var wheather = data.query.results.channel.item.condition.text;
    if(wheather=="sunny"){
        alert("Its Sunny. Go take your cat for a walk!");
    }
        }
    )

}
