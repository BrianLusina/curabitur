/**
 * Scrolls to bottom
 * @param {Element} element Element
 */
export const scrollToBottom = (element: Element): void => {
    element.scrollTop = element.scrollHeight;
};

/**
 * Checks if a page is active
 * @param {String} pageHash Page Hash
 * @returns {Boolean}
 */
export const isPageActive = (pageHash: string): boolean => {
    return window.location.hash.split("/")[1] === pageHash;
};
