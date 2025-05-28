// Seleccionamos el botón hamburguesa
const toggleButton = document.querySelector('.menu-toggle');

// Seleccionamos la lista del menú
const navLinks = document.querySelector('.nav ul');

// Evento: cuando hacen clic en el botón
if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    // Alternamos la clase "active" en el menú (muestra/oculta)
    navLinks.classList.toggle('active');
  });
}

// Cerrar menú al hacer clic en un enlace (móvil)
const menuItems = document.querySelectorAll('.nav ul li a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Efecto suave al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling para enlaces internos
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
  
  lastScrollY = currentScrollY;
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .solution-card, .hero-stats .stat');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Counter animation for stats
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    const isPercentage = target.includes('%');
    const isTime = target.includes('/');
    const isPlus = target.includes('+');
    
    let finalNumber;
    if (isPercentage) {
      finalNumber = parseInt(target);
    } else if (isTime) {
      return; // Skip 24/7
    } else if (isPlus) {
      finalNumber = parseInt(target);
    } else {
      finalNumber = parseInt(target);
    }
    
    if (isNaN(finalNumber)) return;
    
    let current = 0;
    const increment = finalNumber / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        current = finalNumber;
        clearInterval(timer);
      }
      
      let displayValue = Math.floor(current);
      if (isPercentage) {
        counter.textContent = displayValue + '%';
      } else if (isPlus) {
        counter.textContent = displayValue + '+';
      } else {
        counter.textContent = displayValue;
      }
    }, 30);
  });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
}

// Floating cards animation enhancement
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`;
});

// Button hover effects enhancement
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-login');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    const rate = scrolled * -0.5;
    heroImage.style.transform = `translateY(${rate}px)`;
  }
});

// Loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add loading state
  document.body.style.opacity = '0';
  
  // Remove loading state after a short delay
  setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
  }, 100);
});
