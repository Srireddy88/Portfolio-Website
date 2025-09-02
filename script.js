// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-list')?.classList.toggle('show');
});

// Contact form validation
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  let isValid = true;
  
  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
  if (!name) {
    document.querySelector('#name + .error').textContent = 'Name is required';
    isValid = false;
  }
  
  if (!email) {
    document.querySelector('#email + .error').textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.querySelector('#email + .error').textContent = 'Enter a valid email';
    isValid = false;
  }
  
  if (!message) {
    document.querySelector('#message + .error').textContent = 'Message is required';
    isValid = false;
  }
  
  if (isValid) {
    alert('Message sent successfully!');
    this.reset();
  }
});

