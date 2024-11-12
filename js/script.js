// Function to generate particles at cursor position
function createParticle(event) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const particleContainer = document.getElementById('particle-container');
  particleContainer.appendChild(particle);

  const size = Math.random() * 10 + 5; // Random size for the particle
  const x = event.clientX;
  const y = event.clientY;

  // Set particle's initial position and size
  particle.style.left = `${x - size / 2}px`;
  particle.style.top = `${y - size / 2}px`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Apply a random direction and speed to the particle animation
  const angle = Math.random() * 360;
  const distance = Math.random() * 30 + 20; // The distance the particle moves
  const duration = Math.random() * 0.5 + 0.5; // Duration of the animation

  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  particle.style.animation = `particle-animation ${duration}s forwards`;

  // Remove particle after animation is complete
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

// Add event listener to track mouse movement
document.addEventListener('mousemove', createParticle);
