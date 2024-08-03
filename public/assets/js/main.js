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


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        project: document.getElementById('project').value,
    };

    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Form submitted successfully!');
        } else {
            alert('Form submission failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Form submission failed.');
    });
});
