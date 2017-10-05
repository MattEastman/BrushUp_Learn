var catCounter = 0;

var clickCount = document.getElementById('catImg');

clickCount.addEventListener('click', function(){
    catCounter++
document.getElementById('track').innerHTML = catCounter;
    
}, false);

