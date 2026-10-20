/**
 * Shay Charis Travel Solutions - Navigation Logic
 * Handles sticky header, mobile drawer menu, smooth anchor scrolling, and active link spy.
 */

(function () {
  'use strict';

  function initNavigation() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileDrawer = document.querySelector('.mobile-nav-drawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], div[id="top"]');

    // 1. Sticky header elevation on scroll
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Mobile drawer menu toggle
    function toggleMobileMenu(forceState) {
      if (!menuToggle || !mobileDrawer) return;
      const isOpen = forceState !== undefined ? forceState : !mobileDrawer.classList.contains('is-open');

      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileDrawer.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', () => toggleMobileMenu());
    }

    // Close mobile drawer when clicking any link
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          toggleMobileMenu(false);
        }
      });
    });

    // Close mobile drawer on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });

    // 3. Scrollspy: highlight active section in navbar
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      };

      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('is-active');
              } else if (href && href.startsWith('#')) {
                link.classList.remove('is-active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach((sec) => sectionObserver.observe(sec));
    }
  }

  window.addEventListener('DOMContentLoaded', initNavigation);
})();
