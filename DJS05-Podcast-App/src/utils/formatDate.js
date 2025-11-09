/**
 * Converts an ISO date string  readable format:
 * Used in ShowDetail page to display "Updated: July 15, 2024"
 *
 * @param {string} dateString - The raw date from the API
 * @returns {string} - Formatted date like "March 5, 2024"
 */

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
