
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('focus', () => {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  });
});


// EmailJS form submission
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("y0FCuSlgmINX-X6mg");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_lee5wod', 'template_17ymicz', this)
            .then(function() {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
    });
});
