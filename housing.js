 function change() {
     var x = document.getElementById('view').innerHTML= Date();


}

function back() {
    var y = document.getElementsByClassName('home__like').style.color = red;
}





function timer() {
    var i = 0;
    i += 1;
    postMessage(i);
    setTimeout('timer()', 60);
}

timer();
