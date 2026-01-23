# World Monuments Exploration Site

A responsive, multi-page website showcasing historical monuments from around the globe. This project was developed as part of the Web Development course at the Lebanese University.

## How to Run the Site

* **Localy:** open `index.html` in any modern web browser (Chrome, Firefox, or Edge).

## Summary of Features

* **Responsive Design:** Optimized for mobile, tablet, and desktop using CSS Flexbox and Grid.
* **Dynamic Gallery:** A searchable gallery of world-class monuments.
* **Interactive Monument Pages:** Detailed two-column layouts for specific sites with embedded Google Maps.
* **Back-to-Top Button:** A floating button that appears on scroll for better UX.
* **Active Navigation Indicator:** Automatically highlights the current page in the header and footer.
* **Form Validation:** Real-time validation for the Feedback page.
* **Webpage Cion:** Added a webpage icon to all my pages.

## JavaScript Explanation

The site uses vanilla JavaScript (`js/main.js`) to enhance user experience without external libraries:

* **Current Page Highlighter:** Uses `window.location` to compare the URL path with navigation links, adding an `.active` class to the current page link.
* **Back-to-Top Logic:** Monitors the `window.scrollY` position to toggle the visibility of the scroll-to-top button and handles the smooth scroll behavior.
* **Search Filter:** Filters the Gallery items based on user input in the search bar.

## Known Bugs

* **Google Maps Load Time:** Depending on connection speed, the iframes may take a few seconds to render on the monument pages.
* **Cache Persistence:** On some mobile browsers, CSS updates may require a manual cache clear to reflect immediately.

## Tools Used

* **HTML5** (Semantic structure)
* **CSS3** (Custom properties and Media Queries)
* **JavaScript** (ES6+ DOM manipulation)
* **GitHub Pages** (Deployment and hosting)

---
**Developer:** Hani Mohtar (Lebanese University - 2nd Year CS)
**Date:** January 2026
