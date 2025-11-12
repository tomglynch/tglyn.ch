// Wedding Invitation Personalization
// Reads ?s=base64EncodedName from URL and personalizes the page
//
// To generate a personalized link:
// 1. Encode the guest name in base64: echo -n "Guest Name" | base64
// 2. Add to URL: /Milla&TomsWedding/?s=BASE64_ENCODED_NAME
// Example: /Milla&TomsWedding/?s=VGVzdA== (for "Test")

(function () {
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

  // Parse multiple names from a string (supports both "&" and "and" separators)
  function parseNames(guestName) {
    // First try splitting by " & "
    let names = guestName.split(' & ');

    // If no "&" found, try splitting by " and "
    if (names.length === 1) {
      names = guestName.split(' and ');
    }

    // Trim whitespace from each name
    return names.map(name => name.trim()).filter(name => name.length > 0);
  }

  // Convert a name to possessive form
  function toPossessive(name) {
    // If the name ends with 's', just add an apostrophe
    if (name.toLowerCase().endsWith('s')) {
      return name + "'";
    }
    // Otherwise add 's
    return name + "'s";
  }

  // Generate dynamic email form fields based on guest names
  function generateEmailFields(names) {
    const emailFieldsContainer = document.getElementById('email-fields');
    if (!emailFieldsContainer) return;

    // Clear existing fields
    emailFieldsContainer.innerHTML = '';

    // Create a field for each name
    names.forEach((name, index) => {
      const label = document.createElement('label');
      label.className = 'email-field-label';
      label.textContent = toPossessive(name) + ' email';
      label.setAttribute('for', `email-${index}`);

      const input = document.createElement('input');
      input.type = 'email';
      input.name = `email-${index}`;
      input.id = `email-${index}`;
      input.placeholder = toPossessive(name) + ' email address';
      input.required = true;

      emailFieldsContainer.appendChild(label);
      emailFieldsContainer.appendChild(input);
    });
  }

  // Personalize the page with guest name
  function personalizePage(guestName) {
    // Parse the guest name(s)
    const names = parseNames(guestName);

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

    // Generate dynamic email fields
    generateEmailFields(names);

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

// Parallax scrolling effect
(function () {
  function initParallax() {
    const sections = document.querySelectorAll('.wedding-section');

    function handleScroll() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

          // Find text and image within this section
          const text = section.querySelector('.section-text');
          const image = section.querySelector('.section-image');

          if (text && image) {
            // ===== PARALLAX OPTIONS =====
            // Uncomment ONE option below to test different parallax effects

            // OPTION 1: Subtle downward text drift (ACTIVE)
            // const textOffset = scrollProgress * 50;
            // const imageOffset = 0;
            // text.style.transform = `translateY(${textOffset}px)`;
            // image.style.transform = `translateY(${imageOffset}px)`;

            // // OPTION 2: Medium text movement
            // const textOffset = scrollProgress * 120;
            // const imageOffset = 0;
            // text.style.transform = `translateY(${textOffset}px)`;
            // image.style.transform = `translateY(${imageOffset}px)`;

            // // OPTION 3: Text and images both move (opposite directions)
            // const textOffset = scrollProgress * 80;
            // const imageOffset = scrollProgress * -50;
            // text.style.transform = `translateY(${textOffset}px)`;
            // image.style.transform = `translateY(${imageOffset}px)`;

            // // OPTION 4: Strong separation effect
            const textOffset = 1.25 * (81 ** scrollProgress - 1) * 15;
            const imageOffset = 1.25 * (81 ** scrollProgress - 1) * -10;
            text.style.transform = `translateY(${textOffset}px)`;
            image.style.transform = `translateY(${imageOffset}px)`;

            // // OPTION 5: Gentle reveal with slower effect
            // const multiplier = 0.8;
            // const textOffset = scrollProgress * 100 * multiplier;
            // const imageOffset = scrollProgress * -30 * multiplier;
            // text.style.transform = `translateY(${textOffset}px)`;
            // image.style.transform = `translateY(${imageOffset}px)`;

            // // OPTION 6: Delayed start (text appears first, then starts moving)
            // const startDelay = 0.15; // Text starts moving after 15% scroll progress
            // const adjustedProgress = Math.max(0, scrollProgress - startDelay) / (1 - startDelay);
            // const textOffset = adjustedProgress * 100;
            // const imageOffset = scrollProgress * -40;
            // text.style.transform = `translateY(${textOffset}px)`;
            // image.style.transform = `translateY(${imageOffset}px)`;
          }
        }
      });
    }

    // Use requestAnimationFrame for smooth performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial call
    handleScroll();
  }

  // Run parallax on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
  } else {
    initParallax();
  }
})();
