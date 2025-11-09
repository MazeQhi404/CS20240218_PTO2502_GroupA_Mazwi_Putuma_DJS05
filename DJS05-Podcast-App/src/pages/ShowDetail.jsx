import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchShowById } from "../api/fetchData";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";
import SeasonAccordian from "../components/SeasonsAccordian";
import { GENRE_MAP } from "../data/genreMap";
import { formatDate } from "../utils/formatDate";

/**
 * SHOW DETAIL PAGE - DYNAMIC ROUTE: /show/:id
 */

export default function ShowDetail() {
    //Get id from URL:
    const { id } = useParams();

    //Local state for this specific show
    const [podcast, setPodcast] = useState(null); //Full show data
    const [loading, setLoading] = useState(true); // Show spinner
    const [error, setError] = useState(null); // Show error message

    /**
     * Fetch Single Show When Component Mounts
     * Runs once ([]) or when id changes
     */
    useEffect(() => {
        const loadShow = async () => {
            try {
                const data = await fetchShowById(id); //API call
                setPodcast(data);                     // Save data
            } catch (err) {
                setError(err.message);                // Network or 404 error
            } finally {
                setLoading(false);                     // Always hide spinner
            }
        };

        loadShow();
    }, [id]); //Re-run if user navigates to different show

    

}