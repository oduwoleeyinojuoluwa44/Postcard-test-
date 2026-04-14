/**
 * Profile Card — JavaScript
 * Updates the epoch time display every 500ms.
 */

(function () {
  'use strict';

  const timeEl = document.getElementById('epoch-time');

  if (!timeEl) {
    console.warn('Epoch time element not found.');
    return;
  }

  /**
   * Renders the current epoch time in milliseconds into the time element.
   */
  function updateTime() {
    const now = Date.now();
    timeEl.textContent = now;
    timeEl.setAttribute('datetime', new Date(now).toISOString());
  }

  // Initial render
  updateTime();

  // Refresh every 500ms
  setInterval(updateTime, 500);
})();
