// Animation utility functions
export function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    element.style.opacity = opacity;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

export function slideIn(element, direction = 'left', duration = 300) {
  const directions = {
    left: ['-100%', '0'],
    right: ['100%', '0'],
    up: ['0', '100%'],
    down: ['0', '-100%']
  };
  
  element.style.transform = `translate(${directions[direction][0]}, ${directions[direction][1]})`;
  element.style.display = 'block';
  
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    element.style.transform = `translate(${percentage * 0}%, ${percentage * 0}%)`;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

// Scroll animation helper
export function animateOnScroll(elements, className, threshold = 0.1) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  }, { threshold });
  
  elements.forEach(el => observer.observe(el));
}
