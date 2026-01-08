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

  // Parse multiple names from a string (supports "&", "and", and comma separators)
  function parseNames(guestName) {
    // Replace " & " and " and " with commas for uniform splitting
    let normalizedName = guestName.replace(/ & /g, ',').replace(/ and /g, ',');

    // Split by comma
    let names = normalizedName.split(',');

    // Trim whitespace from each name and filter out empty strings
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

    // Remove hidden placeholder fields (they're only for Netlify build-time detection)
    // and populate guest name fields
    for (let i = 1; i <= 5; i++) {
      const hiddenEmail = document.querySelector(`input[type="hidden"][name="email-${i}"]`);
      if (hiddenEmail) hiddenEmail.remove();

      const hiddenGuest = document.querySelector(`input[type="hidden"][name="guest-${i}"]`);
      if (hiddenGuest) {
        // Populate with name if exists, otherwise leave empty
        hiddenGuest.value = names[i - 1] || '';
      }
    }

    // Create a visible email field for each name
    names.forEach((name, index) => {
      const fieldNum = index + 1;
      const label = document.createElement('label');
      label.className = 'email-field-label';
      label.textContent = toPossessive(name) + ' email';
      label.setAttribute('for', `email-${fieldNum}`);

      const input = document.createElement('input');
      input.type = 'email';
      input.name = `email-${fieldNum}`;
      input.id = `email-${fieldNum}`;
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

    // Generate dynamic email fields (also populates hidden guest-N fields)
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
            const textOffset = 1.5 * scrollProgress * 150;  // or whatever speed you prefer
            const imageOffset = scrollProgress * -100;
            text.style.transform = `translateY(${textOffset}px)`;
            image.style.transform = `translateY(${imageOffset}px)`;
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
