
document.getElementById("game-1-icon").addEventListener("click", function(){
    document.getElementById("game-1-window").innerHTML = "";
    console.log("hello")
    var element = document.createElement('iframe');
    element.id = "game-1-iframe";
    element.setAttribute("src", "game-1.html");
    document.querySelector("#game-1-window").appendChild(element);
})