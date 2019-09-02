window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById('to-top-button').style.display = 'block';
} else {
    document.getElementById('to-top-button').style.display = 'none';
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
