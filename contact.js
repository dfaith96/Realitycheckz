const navLinks = document.querySelector('.nav-links');
if (navLinks && !navLinks.querySelector('[href="product.html"]')) navLinks.insertAdjacentHTML('afterbegin', '<a href="product.html">Product</a><a href="features.html">Features</a>');
document.querySelectorAll('footer a[href="#"]').forEach((link, index) => { link.href = index === 0 ? 'privacy.html' : 'terms.html'; });
document.getElementById('contactForm').addEventListener('submit', function (event) { event.preventDefault(); const status = document.getElementById('formStatus'); status.textContent = 'Thanks — your message has been received. We will be in touch soon.'; this.reset(); });
