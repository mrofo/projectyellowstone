$(document).ready(function() {
    $('a.learn').mouseenter(function() {
        $('a.learn').fadeTo('fast', 0.6);
    });
    $('a.learn').mouseleave(function() {
        $('a.learn').fadeTo('fast', 1);
    });
    $('a.advise').mouseenter(function() {
        $('a.advise').fadeTo('fast', 0.6);
    });
    $('a.advise').mouseleave(function() {
        $('a.advise').fadeTo('fast', 1);
    });
    $('a.about').mouseenter(function() {
        $('a.about').fadeTo('fast', 0.6);
    });
    $('a.about').mouseleave(function() {
        $('a.about').fadeTo('fast', 1);
    });
});