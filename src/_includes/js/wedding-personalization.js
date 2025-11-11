// Wedding Invitation Personalization
// Reads ?s=base64EncodedName from URL and personalizes the page

(function() {
  // Get URL parameter
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Decode base64 string
  function decodeBase64(str) {
    try {
      return decodeURIComponent(escape(atob(str)));
    } catch (e) {
      console.error('Failed to decode base64 string:', e);
      return null;
    }
  }

  // Show error message and hide main content
  function showError() {
    const errorSection = document.getElementById('invitation-error');
    const mainContent = document.getElementById('invitation-content');

    if (errorSection) {
      errorSection.style.display = 'flex';
    }
    if (mainContent) {
      mainContent.style.display = 'none';
    }
  }

  // Personalize the page with guest name
  function personalizePage(guestName) {
    // Find all elements with class 'guest-name' and replace with actual name
    const nameElements = document.querySelectorAll('.guest-name');
    nameElements.forEach(element => {
      element.textContent = guestName;
    });

    // Also populate the hidden form field with guest name
    const guestNameInput = document.querySelector('.guest-name-input');
    if (guestNameInput) {
      guestNameInput.value = guestName;
    }

    // Show main content
    const mainContent = document.getElementById('invitation-content');
    const errorSection = document.getElementById('invitation-error');

    if (mainContent) {
      mainContent.style.display = 'block';
    }
    if (errorSection) {
      errorSection.style.display = 'none';
    }
  }

  // Main execution
  function init() {
    const encodedName = getUrlParameter('s');

    if (!encodedName) {
      showError();
      return;
    }

    const guestName = decodeBase64(encodedName);

    if (!guestName) {
      showError();
      return;
    }

    personalizePage(guestName);
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
