player_1_name=localStorage.getItem("player_1name");
player_2_name=localStorage.getItem("player_2name");
player_1_score=0;
player_2_score=0;
document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question turn"+player_1_name;
document.getElementById("player_Answer").innerHTML="Ans turn"+player_2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase="+word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br> Answer:<input type='Text' id='input_checkbox'>";
    check_btn="<br> <br> <button class='btn btn-info' onclick='check()'>  check </button>";
row=question_word+input_box+check_btn;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=" ";
}
question_turn="player_1";
ans_turn="player_2";
function check(){
    get_answer=document.getElementById("input_checkbox").value;
    ans=get_answer.toLowerCase();
    console.log("answer in lowercase"+ans);
    if(ans==word){
        if(ans_turn=="player_1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
            console.log("player_1_score"+player_1_score);
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
            console.log("player_2_score"+player_2_score);
        }
    }
         if(question_turn=="player_1"){
             question_turn="player_2";
             document.getElementById("player_question").innerHTML="question_turn"+player_2_name;
         }
         else{
            question_turn="player_1";
            document.getElementById("player_question").innerHTML="question_turn"+player_1_name;
         }

         if(ans_turn=="player_1"){
            ans_turn="player_2";
            document.getElementById("player_Answer").innerHTML="Answer_turn "+player_2_name;
        }
        else{
           ans_turn="player_1";
           document.getElementById("player_Answer").innerHTML="Answer_turn "+player_1_name;
        }
        document.getElementById("output").innerHTML=" ";
}