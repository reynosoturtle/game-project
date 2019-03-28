
document.getElementById("game-1-icon").addEventListener("click", function(){
    document.getElementById("game-1-window").innerHTML = "";
    document.getElementById("game-2-window").innerHTML = "";
    console.log("hello")
    var element = document.createElement('iframe');
    element.id = "game-1-iframe";
    element.setAttribute("src", "game-1.html");
    document.querySelector("#game-1-window").appendChild(element);
})

document.getElementById("game-2-icon").addEventListener("click", function(){
    document.getElementById("game-1-window").innerHTML = "";
    document.getElementById("game-2-window").innerHTML = "";
    console.log("hello")
    var element = document.createElement('iframe');
    element.id = "game-2-iframe";
    element.setAttribute("src", "game-2.html");
    document.querySelector("#game-2-window").appendChild(element);
})

var span = document.querySelector('#live-clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.innerHTMLs = h + ":" + m + ":" + s;
}

setInterval(time, 1000);

// function closeFrame() {
//             setTimeout(function(){
//                 parent.closeFrame();
//             },500);
// }