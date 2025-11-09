/** 
 * Fetch all podcast previews from the root endpoint
 */
export const fetchAllPreviews = async () => {
    const response = await fetch("https://podcast-api.netlify.app");
    if (!response.ok) throw new Error("Failed to fetch previews");
    return response.json();
};

/**
 * Fetch a single show by ID
 * @param {string} id - The show ID
 */
export const fetchShowById = async (id) => {
    const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
    if (!response.ok) {
        if (response.status === 404) throw new error("Show not found");
        throw new Error("Failed to fetch show")
    }
    return response.json();
};