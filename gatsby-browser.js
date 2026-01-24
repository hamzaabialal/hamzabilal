/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Handle bfcache restoration
export const onClientEntry = () => {
  window.addEventListener('pageshow', event => {
    if (event.persisted) {
      // Page was restored from bfcache
      // Force a refresh of the page state if needed
      window.dispatchEvent(new Event('bfcache-restore'));
    }
  });
};
