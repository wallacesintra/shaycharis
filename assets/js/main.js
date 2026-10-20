/**
 * Shay Charis Travel Solutions - Application Entry
 * Bootstraps animations, service interactions, and enhances user experience.
 */

(function () {
  'use strict';

  function initScrollReveals() {
    if (!('IntersectionObserver' in window)) return;

    // Add reveal class to main section cards and items
    const elementsToReveal = document.querySelectorAll(
      '.about-intro-grid, .about-pillars-grid, .service-item, .why-grid, .values-grid, .contact-grid'
    );

    elementsToReveal.forEach((el) => {
      el.classList.add('reveal-on-scroll');
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elementsToReveal.forEach((el) => revealObserver.observe(el));
  }

  function initServiceClicks() {
    // Make service list items clickable to launch enquiry with that service pre-selected
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item) => {
      item.addEventListener('click', () => {
        const titleEl = item.querySelector('.service-title');
        const serviceName = titleEl ? titleEl.textContent.trim() : '';
        if (window.openEnquiryModal) {
          window.openEnquiryModal(serviceName);
        }
      });
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initServiceClicks();
    console.log('Shay Charis Travel Solutions initialized successfully.');
  });
})();
