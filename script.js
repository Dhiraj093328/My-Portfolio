// ==================== PARTICLES INITIALIZATION ====================
function initParticles() {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
    
    const colors = ['var(--neon-blue)', 'var(--neon-pink)', 'var(--neon-purple)', 'var(--neon-green)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
  }
}

// ==================== CURSOR TRAIL ====================
function initCursorTrail() {
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 1000);
    }
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==================== SMOOTH SCROLLING ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
}

// ==================== ACTIVE NAV LINK ====================
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==================== SCROLL REVEAL ====================
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

function initScrollReveal() {
  window.addEventListener('scroll', reveal);
  reveal(); // Call on load
}

// ==================== TYPING ANIMATION ====================
function initTypingAnimation() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;

  const roles = [
    'AI Developer',
    'Problem Solver',
    'Innovator',
    'Full-Stack Engineer',
    'ML Specialist',
    'Code Architect'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(typeRole, typeSpeed);
  }

  typeRole();
}

// ==================== PARALLAX EFFECT ====================
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && window.innerWidth > 992) {
      heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// ==================== GLITCH TEXT EFFECT ====================
function initGlitchEffect() {
  const glitchText = document.querySelector('.glitch-text');
  if (!glitchText) return;

  glitchText.addEventListener('mouseenter', function() {
    let iterations = 0;
    const originalText = this.textContent;
    
    const interval = setInterval(() => {
      this.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        })
        .join('');
      
      if (iterations >= originalText.length) {
        clearInterval(interval);
      }
      
      iterations += 1/3;
    }, 30);
  });
}

// ==================== SCROLL PARTICLES ====================
function initScrollParticles() {
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (Math.abs(st - lastScrollTop) > 50 && window.innerWidth > 768) {
      createScrollParticle();
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);
}

function createScrollParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = window.scrollY + Math.random() * window.innerHeight + 'px';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.position = 'absolute';
  
  const colors = ['var(--neon-blue)', 'var(--neon-pink)', 'var(--neon-purple)'];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 2000);
}

// ==================== MAGNETIC BUTTON EFFECT ====================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-hero, .project-btn, .social-icon');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
function optimizePerformance() {
  // Reduce animations on low-end devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.querySelectorAll('.particle').forEach(p => {
      if (Math.random() > 0.5) p.remove();
    });
  }
}

// ==================== LOADING ANIMATION ====================
function initLoadingAnimation() {
  window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s';
      document.body.style.opacity = '1';
    }, 100);
  });
}

// ==================== INITIALIZE ALL FUNCTIONS ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initParticles();
  initCursorTrail();
  initNavbarScroll();
  initSmoothScroll();
  initActiveNavLink();
  initScrollReveal();
  initTypingAnimation();
  initParallaxEffect();
  initGlitchEffect();
  initScrollParticles();
  initMagneticButtons();
  optimizePerformance();
  initLoadingAnimation();
  
  console.log('🚀 Portfolio initialized successfully!');
});

function validateForm() {
  let isValid = true;
  
  // Clear previous errors
  document.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
  
  // Name validation
  const name = document.getElementById('customer_name').value.trim();
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }
  
  // Email validation
  const email = document.getElementById('customer_email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    isValid = false;
  }
  
  // Phone validation
  const phone = document.getElementById('customer_phone').value.trim();
  const phoneRegex = /^[0-9]{10}$/;
  if (phone === '') {
    document.getElementById('phoneError').textContent = 'Phone number is required';
    isValid = false;
  } else if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
    isValid = false;
  }
  
  // Date validation
  const date = document.getElementById('date').value;
  if (date === '') {
    document.getElementById('dateError').textContent = 'Date is required';
    isValid = false;
  }
  
  // Description validation
  const description = document.getElementById('project_description').value.trim();
  if (description === '') {
    document.getElementById('descError').textContent = 'Project description is required';
    isValid = false;
  }
  
  return isValid;
}
