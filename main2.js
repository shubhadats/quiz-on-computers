function wrong(){
    window.location="rong2.html"
}
function right(){
    window.location="lick2.html"
	Score2 = localStorage.getItem("score");
    Score2 = Number(Score2) + 1;
    localStorage.setItem("score",Score2);
}
function next(){
    window.location="index3.html"
}