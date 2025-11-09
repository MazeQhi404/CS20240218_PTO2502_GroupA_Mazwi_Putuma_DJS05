/** 
 * Fetch all podcast previews from the root endpoint
 */
export const fetchAllPreviews = async () => {
    const response = await fetch("https://podcast-api.netlify.app");
    if (!response.ok) throw new Error("Failed to fetch previews");
    return response.json();
};

