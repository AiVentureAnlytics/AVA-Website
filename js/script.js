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
const animateElements = document.querySelectorAll('.feature-card, .solution-card, .hero-stats .stat, .results-cta');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Counter animation for stats - COMENTADO PARA EVITAR CONFLICTOS
/*
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
*/

// Trigger counter animation when stats section is visible - COMENTADO
/*
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
*/

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

// NUEVA FUNCIÓN SIMPLE PARA ANIMAR NÚMEROS - GARANTIZADA
function startNumberAnimation() {
  // Buscar todos los elementos con data-target
  const numberElements = document.querySelectorAll('[data-target]');
  
  numberElements.forEach(element => {
    const finalNumber = parseInt(element.getAttribute('data-target'));
    
    if (finalNumber && finalNumber > 0) {
      let currentNumber = 0;
      const increment = Math.ceil(finalNumber / 30); // 30 pasos
      
      // Función que actualiza el número
      const updateNumber = () => {
        currentNumber += increment;
        
        if (currentNumber >= finalNumber) {
          element.textContent = finalNumber;
        } else {
          element.textContent = currentNumber;
          setTimeout(updateNumber, 50); // Cada 50ms
        }
      };
      
      // Iniciar la animación
      element.textContent = '0';
      setTimeout(updateNumber, 100);
    }
  });
}

// NUEVA FUNCIÓN SIMPLE PARA BARRAS DE PROGRESO
function startProgressAnimation() {
  const progressBars = document.querySelectorAll('.progress-bar');
  console.log('🔄 Iniciando animación de barras, encontradas:', progressBars.length);
  
  progressBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute('data-width');
    console.log(`Barra ${index + 1}: target width = ${targetWidth}%`);
    
    if (targetWidth) {
      // Resetear inmediatamente
      bar.style.width = '0%';
      bar.style.transition = 'none'; // Quitar transición temporalmente
      
      // Forzar reflow
      bar.offsetHeight;
      
      // Restaurar transición y animar
      setTimeout(() => {
        bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
        bar.style.width = targetWidth + '%';
        console.log(`✅ Barra ${index + 1} animada a ${targetWidth}%`);
      }, 100 + (index * 200)); // Delay escalonado para cada barra
    }
  });
}

// OBSERVER SIMPLE Y DIRECTO
function initResultsAnimations() {
  const resultsSection = document.querySelector('.ava-results');
  
  if (!resultsSection) {
    console.log('No se encontró la sección .ava-results');
    return;
  }
  
  let animationTriggered = false;
  
  // Crear el observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationTriggered) {
        animationTriggered = true;
        console.log('¡Sección visible! Iniciando animaciones...');
        
        // Iniciar animaciones con timing mejorado
        startNumberAnimation();
        
        // Iniciar barras después de que los números empiecen
        setTimeout(() => {
          startProgressAnimation();
        }, 800);
        
        // Desconectar observer
        observer.unobserve(resultsSection);
      }
    });
  }, {
    threshold: 0.3 // Reducir threshold para activar antes
  });
  
  observer.observe(resultsSection);
  console.log('Observer configurado para .ava-results');
}

// FUNCIÓN DE PRUEBA MANUAL (para debug)
function testAnimations() {
  console.log('🧪 Ejecutando animaciones manualmente...');
  
  // Verificar elementos
  const numbers = document.querySelectorAll('[data-target]');
  const bars = document.querySelectorAll('.progress-bar');
  
  console.log('Números encontrados:', numbers.length);
  console.log('Barras encontradas:', bars.length);
  
  // Ejecutar animaciones
  startNumberAnimation();
  
  setTimeout(() => {
    startProgressAnimation();
  }, 1000);
  
  console.log('✅ Animaciones iniciadas manualmente');
}

// Hacer la función de prueba global para poder llamarla desde la consola
window.testAnimations = testAnimations;

// INICIALIZACIÓN FINAL - GARANTIZADA
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando animaciones de resultados...');
  
  // Verificar elementos
  const resultsSection = document.querySelector('.ava-results');
  const numberElements = document.querySelectorAll('[data-target]');
  const progressBars = document.querySelectorAll('.progress-bar');
  
  console.log('Sección encontrada:', !!resultsSection);
  console.log('Números encontrados:', numberElements.length);
  console.log('Barras encontradas:', progressBars.length);
  
  // Inicializar animaciones
  initResultsAnimations();
  
  // También agregar efectos de hover a las tarjetas
  const cards = document.querySelectorAll('.result-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
  
  console.log('✅ Configuración completada');
});

// FLECHA INTERACTIVA DEL HERO - FUNCIONALIDAD DE SCROLL
document.addEventListener('DOMContentLoaded', function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollArrow = document.querySelector('.scroll-arrow');
  
  if (scrollIndicator && scrollArrow) {
    // Hacer la flecha clickeable
    scrollIndicator.style.cursor = 'pointer';
    scrollArrow.style.cursor = 'pointer';
    
    // Agregar efecto hover
    scrollIndicator.addEventListener('mouseenter', function() {
      scrollArrow.style.transform = 'rotate(45deg) scale(1.1)';
      scrollArrow.style.borderColor = 'rgba(255, 255, 255, 1)';
      scrollArrow.style.transition = 'all 0.3s ease';
    });
    
    scrollIndicator.addEventListener('mouseleave', function() {
      scrollArrow.style.transform = 'rotate(45deg) scale(1)';
      scrollArrow.style.borderColor = 'rgba(255, 255, 255, 0.7)';
      scrollArrow.style.transition = 'all 0.3s ease';
    });
    
    // Funcionalidad de scroll al hacer clic
    scrollIndicator.addEventListener('click', function() {
      // Buscar la primera sección después del hero
      const nextSection = document.querySelector('.ava-presentation');
      
      if (nextSection) {
        // Scroll suave hacia la siguiente sección
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Efecto visual al hacer clic
        scrollArrow.style.transform = 'rotate(45deg) scale(0.9)';
        setTimeout(() => {
          scrollArrow.style.transform = 'rotate(45deg) scale(1)';
        }, 150);
      }
    });
    
    // Ocultar la flecha cuando el usuario haga scroll hacia abajo
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      
      if (scrollPosition > heroHeight * 0.3) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
      }
    });
  }
});
