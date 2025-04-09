const faders = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // remove observer after fade-in
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});
faders.forEach(fader => observer.observe(fader));