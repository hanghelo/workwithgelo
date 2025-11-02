// Mobile Menu Toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
  document.querySelector('nav')?.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      document.querySelector('nav')?.classList.remove('active');
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Simple Form Validation + EmailJS Sending
const contactForm = document.querySelector('.contact-form form') || document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const status = document.querySelector('.form-status');

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const btn = e.target.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs.sendForm("service_ksl7tgk", "template_darchdh", e.target)
      .then(() => {
        alert("✅ Message sent successfully!");
        status && (status.textContent = "Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("❌ Failed to send message. Please try again.");
        status && (status.textContent = "Failed to send message. Please try again.");
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "Send Message";
      });
  });
}

// Email Sending
function sendEmail(e) {
  e.preventDefault();

  const btn = e.target.querySelector("button[type='submit']");
  btn.disabled = true;
  btn.textContent = "Sending...";

  emailjs.sendForm("service_ksl7tgk", "template_darchdh", e.target)
    .then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("❌ Failed to send message. Please try again.");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Send Message";
    });
}