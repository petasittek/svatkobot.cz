/**
 * Scroll to element defined in [data-scrollid]
 *
 * @param {Object} ev MouseEvent
 */
export const scrollToIdByEvent = ev => document.getElementById(ev.target.dataset.scrollid).scrollIntoView();

/**
 * Scroll to element by ID
 *
 * @param {string} id Element ID
 */
export const scrollToId = id => document.getElementById(id).scrollIntoView();
