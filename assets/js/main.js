document.getElementById('readMoreBtn').addEventListener('click', function() {
    var contentAn = document.getElementById('contentAn');
    var overlay = document.getElementById('overlay');
    contentAn.style.display = 'block';
    overlay.style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    var contentAn = document.getElementById('contentAn');
    var overlay = document.getElementById('overlay');
    contentAn.style.display = 'none';
    overlay.style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    var contentAn = document.getElementById('contentAn');
    var overlay = document.getElementById('overlay');
    contentAn.style.display = 'none';
    overlay.style.display = 'none';
});
