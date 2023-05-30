function start() {
    var y = Math.floor(Math.random() * 10) + 1;
var x = document.getElementById("number").value;
}
var y = Math.floor(Math.random()*10 +1);
var x = document.getElementById("number").value;
function check() {
    start()
    if(x==y) {
        console.log("correct")
       
    }
    else if(x>y) {
       console.log("too small")
    }
    else if(x<y){
        
        console.log("too big")
    }
}