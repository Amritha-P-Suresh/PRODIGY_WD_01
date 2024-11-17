// Select the header element
const header = document.querySelector('.nav-header');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
