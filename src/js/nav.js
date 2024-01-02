document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        document.querySelector('#navbar').style.backgroundColor = 'rgba(33, 37, 41, 1.0)';
    } else {
        document.querySelector('#navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    }
});
