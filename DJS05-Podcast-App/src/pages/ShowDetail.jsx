import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchShowById } from "../api/fetchData";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";
import SeasonAccordion from "../components/SeasonsAccordion";
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

    //Conditional Rendering:
    if (loading) return <Loading message="Loading podcast details..."/>;
    if (error) return <Error message={error} />
    if (!podcast) return <Error message="Show not found" />

    // Render Full Show Details:
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/**Back button - takes user to Home with filters preserved */}
            <Link
              to="/"
              className="inline-block mb-6 text-indigo-600 hover:text-indigo-800 font-medium"
            >
                ← Back to Home
            </Link>

            {/** Main layout: image + details */}
            <div className="grid md:grid-cols-3 gap-8">
                {/**Podcast Image */}
                <div>
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/** Details */}
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-4">{podcast.title}</h1>

                    {/** Meta info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>Updated: {formatDate(podcast.updated)}</span>
                        <span>•</span>
                        <span>{podcast.seasons} seasons </span>
                    </div>

                    {/**Genre badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {podcast.genres.map((genreId) => (
                            <span
                              key={genreId}
                              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                            >
                                {GENRE_MAP[genreId]}
                            </span>
                        ))}
                    </div>

                    {/** Description */}
                    <p className="text-gray-700 leading-relaxed">{podcast.description}</p>
                </div>
            </div>

            {/**Seasons section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6"> Seasons</h2>
                {podcast.seasons.map((season) => (
                    <SeasonAccordion key={season.season} season={season} />
                ))}
            </div>
        </div>
    );
}