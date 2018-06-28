window.onload= function(){
    var temp = {};
    function proccessForm(e){
        e.preventDefault();
        var data = document.getElementById("CatB").value;
        if (data==""){
            alert("Please enter a response");
        }
        else{
            temp["CatBreed"]= data;
            console.log(temp["CatBreed"]);
        }
    }
    var form = document.getElementById("catsub");
    form.addEventListener("submit",proccessForm);
    }
