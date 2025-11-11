---
layout: pages/page-wedding.liquid
title: Milla & Tom's Wedding
excludeFromSitemap: true
published: false
tags: []
---

{% include_html %}
<!-- Error message for missing/invalid personalization -->
<section id="invitation-error" class="error-section" style="display: none;">
  <div class="error-content">
    <h1 class="error-title">Oops!</h1>
    <p class="error-text">This is a personalized wedding invitation.</p>
    <p class="error-text">Please use the link that was sent to you.</p>
    <p class="error-subtext">If you believe this is an error, please contact us.</p>
  </div>
</section>

<!-- Main invitation content -->
<div id="invitation-content">
  <section class="hero-section">
    <img src="images/bokeh.jpg" alt="Background" class="hero-bg" />
    <div class="hero-content">
      <h1 class="hero-title">Dear <span class="guest-name"></span>,<br>You're<br>invited...</h1>
    </div>
  </section>

  <section class="wedding-section">
    <div class="section-content">
      <div class="section-text">
        <h2 class="hero-subtitle">to join us</h2>
      </div>
      <img src="images/engagement.jpg" alt="Our engagement" class="section-image" />
    </div>
  </section>

<section class="wedding-section">
  <div class="section-content">
    <img src="images/snow.jpg" alt="Winter adventures" class="section-image" />
    <div class="section-text">
      <h2 class="section-title">our story</h2>
      <p class="section-subtitle">...started back in 2014...</p>
    </div>
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <div class="section-text">
      <h2 class="section-title">so it's about time</h2>
      <p class="section-subtitle">...we celebrate it!</p>
    </div>
    <img src="images/dj.jpg" alt="Celebrating together" class="section-image" />
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <img src="images/perth.jpg" alt="Perth home" class="section-image" />
    <div class="section-text">
      <h2 class="section-title">The deets</h2>
      <div class="details-box">
        <p class="details-heading">So far we can tell you...</p>
        <p class="details-text">date: Saturday November 28<sup>th</sup> 2026</p>

        <p class="details-heading">What to wear?</p>
        <p class="details-text-small">Dress: Festive & formal</p>

        <p class="details-heading" style="margin-top: 40px;">And where?</p>
        <p class="details-text-small">inner north of melbourne!</p>

        <div style="margin-top: 50px; text-align: center;">
          <div class="calendar-dropdown">
            <button class="calendar-button" onclick="toggleCalendarMenu(event)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Add to Calendar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-left: 8px;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="calendar-menu" id="calendarMenu">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Milla+%26+Tom%27s+wedding&dates=20251128/20251129&details=Festive+%26+formal+attire&location=Inner+north+of+Melbourne" target="_blank" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                Google Calendar
              </a>
              <a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=Milla+%26+Tom%27s+wedding&startdt=2025-11-28T00:00:00&enddt=2025-11-29T00:00:00&body=Festive+%26+formal+attire&location=Inner+north+of+Melbourne" target="_blank" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M7 2v20l8-4V6L7 2zm10 4v12l4 2V8l-4-2z"/>
                </svg>
                Outlook
              </a>
              <a href="invite.ics" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                Apple Calendar / iCal
              </a>
              <a href="invite.ics" download class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download .ics file
              </a>
            </div>
          </div>

          <div class="calendar-dropdown" style="margin-left: 20px;">
            <button class="calendar-button rsvp-button" onclick="toggleRsvpMenu(event)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              RSVP
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-left: 8px;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="calendar-menu rsvp-menu" id="rsvpMenu">
              <a href="#" onclick="openRsvpEmail('gmail'); return false;" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                Gmail
              </a>
              <a href="#" onclick="openRsvpEmail('outlook'); return false;" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M7 2v20l8-4V6L7 2zm10 4v12l4 2V8l-4-2z"/>
                </svg>
                Outlook
              </a>
              <a href="#" onclick="openRsvpEmail('yahoo'); return false;" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M12.46 2L9.52 8.92 6.58 2H4.49L8.66 11.83 8.66 22 10.38 22 10.38 11.83 14.55 2z"/>
                  <path d="M17.73 8.89c-1.32 0-2.39 1.07-2.39 2.39 0 1.32 1.07 2.39 2.39 2.39 1.32 0 2.39-1.07 2.39-2.39C20.12 9.96 19.05 8.89 17.73 8.89z"/>
                </svg>
                Yahoo Mail
              </a>
              <a href="#" onclick="openRsvpEmail('default'); return false;" class="calendar-option">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 10px;">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Default Mail App
              </a>
            </div>
          </div>

        </div>

        <div style="margin-top: 60px; max-width: 400px; margin-left: auto; margin-right: auto;">
          <form name="wedding-email" method="POST" data-netlify="true" class="wedding-email-form">
            <p class="form-note">If we don't have your email, please share it so we can keep you updated!</p>
            <input name="name" type="text" placeholder="Full Name" required/>
            <input name="email" type="email" placeholder="Email Address" required/>
            <input type="hidden" name="guest-name" class="guest-name-input" value=""/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <div class="section-text">
      <h2 class="section-title">in celebrating</h2>
    </div>
    <img src="images/acatanango.jpg" alt="Acatanango adventure" class="section-image" />
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <img src="images/puglia.jpg" alt="Puglia travels" class="section-image" />
    <div class="section-text">
      <h2 class="section-title">our love</h2>
    </div>
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <div class="section-text">
      <h2 class="section-title">our home</h2>
    </div>
    <img src="images/coffeemachine.jpg" alt="Coffee at home" class="section-image" />
  </div>
</section>

<section class="wedding-section">
  <div class="section-content">
    <img src="images/amalfi.jpg" alt="Amalfi coast" class="section-image" />
    <div class="section-text">
      <h2 class="section-title">our adventures</h2>
    </div>
  </div>
</section>

<section class="coming-soon">
    <p class="coming-soon-text">We can't wait to celebrate with <span class="guest-name"></span>!</p>
    <p class="coming-soon-text" style="margin-top: 40px;">more to come...</p>
  </section>
</div>
{% endinclude_html %}
