var menu = document.querySelector('.menu');

$(document).ready(function() {

    $('.menu').click(function(e){
        e.stopPropagtion();
       $('nav').toggleClass('.active')
    });
});