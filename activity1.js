score=0;
function updatescore(){
    score=score+1;
    document.getElementById("Score").innerHTML="score:"+score;
}
function  Savescore(){
    localStorage.setItem("score",score);
}
function  Nextpage(){
    window.location="";
}