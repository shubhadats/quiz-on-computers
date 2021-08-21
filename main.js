Score = 0;


function wrong(){
    window.location="rong.html"
}
function right(){
    window.location="lick.html"
    Score2 = localStorage.getItem("score");
    Score2 =  Number(Score2) + 1;
localStorage.setItem("score",Score2);  
}

function next(){
    window.location="index2.html"
}


