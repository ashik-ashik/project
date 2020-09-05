
document.querySelector('#hide').addEventListener("click", function(){
    document.querySelector(".ll").style.opacity = "0";
});


for(var i=0; i<1000;i++){
    document.querySelectorAll('.getting')[i].addEventListener("click", function(){
        var getting = this.value;
        document.querySelector("#get_link").innerHTML ="https://ashik-ashik.github.io/"+getting;
        document.querySelector(".ll").style.visibility = "visible";
        document.querySelector(".ll").style.opacity = "1";
    });
};
