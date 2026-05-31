/*
 * Brightlings Academy — Kids Edu Web Logic
 * Custom JavaScript for interactive components, animations, and form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-up scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hrefAttr = this.getAttribute('href');
      if (hrefAttr === '#') return; // Skip top dummy link
      
      const target = document.querySelector(hrefAttr);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Sticky navbar shadow on scroll
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.06)' : 'none';
    }, { passive: true });
  }

  // Quick Inquiry Form submission logic
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation check
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }

      const btn = this.querySelector('button[type="submit"]');
      if (btn) {
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="animate-bounce"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg> Sent! We\'ll contact you soon.';
        const originalBackground = btn.style.background;
        btn.style.background = '#22C55E';
        btn.disabled = true;
        
        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.style.background = originalBackground;
          btn.disabled = false;
          this.reset();
        }, 4000);
      }
    });
  }
});
