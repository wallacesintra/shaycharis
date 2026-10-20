/**
 * Shay Charis Travel Solutions - Trip Enquiry & Interactive Actions
 * Provides trip planning modal, WhatsApp message composition, and clipboard copy.
 */

(function () {
  'use strict';

  // Toast Notification helper
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('is-hiding');
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // Clipboard copy action
  function setupClipboardCopy() {
    const copyButtons = document.querySelectorAll('[data-copy-text]');
    copyButtons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy-text');
        const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard';

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
          }
          showToast(`${label}`);
        } catch (err) {
          console.warn('Clipboard copy failed:', err);
          showToast('Failed to copy. Please copy manually.');
        }
      });
    });
  }

  // Trip Enquiry Modal
  function setupEnquiryModal() {
    const modalBackdrop = document.getElementById('enquiryModal');
    const openButtons = document.querySelectorAll('[data-open-enquiry]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    const serviceSelect = document.getElementById('enquiryService');
    const enquiryForm = document.getElementById('enquiryForm');

    function openModal(defaultServiceCode) {
      if (!modalBackdrop) return;
      if (serviceSelect && defaultServiceCode) {
        serviceSelect.value = defaultServiceCode;
      }
      modalBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const firstInput = modalBackdrop.querySelector('input, select');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }

    function closeModal() {
      if (!modalBackdrop) return;
      modalBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    openButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceCode = btn.getAttribute('data-service-code');
        openModal(serviceCode);
      });
    });

    closeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
      });
    });

    // Close on backdrop click
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    // Close on ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Form submission -> Generate personalized WhatsApp message
    if (enquiryForm) {
      enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('enquiryName')?.value.trim() || 'Traveler';
        const service = document.getElementById('enquiryService')?.value || 'Travel Consultation';
        const destination = document.getElementById('enquiryDestination')?.value.trim() || 'Flexible / Open to recommendations';
        const travelers = document.getElementById('enquiryTravelers')?.value.trim() || '1';
        const dates = document.getElementById('enquiryDates')?.value.trim() || 'Upcoming dates';
        const notes = document.getElementById('enquiryNotes')?.value.trim() || '';

        let message = `Hello Shay Charis Travel Solutions! 👋\n\n`;
        message += `My name is *${name}* and I would like to plan a trip with you.\n\n`;
        message += `📍 *Service:* ${service}\n`;
        message += `🌍 *Destination / Idea:* ${destination}\n`;
        message += `👥 *Number of Travellers:* ${travelers}\n`;
        message += `📅 *Preferred Travel Time:* ${dates}\n`;
        if (notes) {
          message += `📝 *Notes & Budget:* ${notes}\n`;
        }
        message += `\nPlease let me know suitable options and next steps. Thank you!`;

        const waUrl = window.ShayCharisConfig
          ? window.ShayCharisConfig.getWhatsAppUrl(message)
          : `https://wa.me/254707144839?text=${encodeURIComponent(message)}`;

        closeModal();
        showToast('Opening WhatsApp with your trip details...');
        setTimeout(() => {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        }, 300);
      });
    }

    // Expose openEnquiryModal globally for service item clicks
    window.openEnquiryModal = openModal;
  }

  window.addEventListener('DOMContentLoaded', () => {
    setupClipboardCopy();
    setupEnquiryModal();
  });
})();
