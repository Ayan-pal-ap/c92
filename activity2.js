function back(){
    window.location="activty_1.html";
}
function getscore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> score:"+score +"</h1>";
}

