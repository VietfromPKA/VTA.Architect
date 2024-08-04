//xem them thông tin

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

// đăng ký tư vấn 

document.getElementById('readBtn').addEventListener('click', function() {
    document.getElementById('tvContent').style.display = 'flex';
});

document.getElementById('close_Btn').addEventListener('click', function() {
    document.getElementById('tvContent').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('tvContent')) {
        document.getElementById('tvContent').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submit-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      fetch('https://script.google.com/macros/s/AKfycbyIVQyJyF9ps4a0zNboEmvFxqxEYBgLv8sey_Gq0RzbXMFwPXyqDO9ae9LBIuW8Mzqf/exec', {
        method: 'POST',
        body: new FormData(form)
      }).then(response => {
        if (response.ok) {
          alert('Form submitted successfully!');
          form.reset();
        } else {
          alert('Error submitting form');
        }
      });
    });
  });
  
