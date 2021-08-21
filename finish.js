function add(){
	s = localStorage.getItem("score");
    document.getElementById("ore").innerHTML = s;
    localStorage.removeItem("score");
}