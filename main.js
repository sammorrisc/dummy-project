function myFunction() {
    var x = document.getElementById("my-player");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
    
}

function myFunctionOne() {
    var y = document.getElementById("headingChange");
    y.innerHTML = "My Playlists";
}
  
function myFunctionTwo() {
  var z = document.getElementById("headingChange");
  z.innerHTML = "Queue";
}