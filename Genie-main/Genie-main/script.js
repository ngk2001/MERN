var asuran=document.getElementById("genie")
var Result=document.querySelector(".wish-container")
var Wish=document.getElementById("Wish")
enter.addEventListener("click",function(event){
    if(Wish.value!=""){
    asuran.src="asuran.png"
    var i=document.createElement("img")
    Result.innerHTML="<h1 id='MyName' style='margin-top:30px;'>Poi Padichu,Uzhachi Munnerura Velaiya Paarunga Nanbarey<img class='emoji' src='redheart.png'></h1>"
    }
    else{
        alert("Enter Your Wish in WishBox")
    }
}
);


            