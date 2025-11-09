import { usePodcast } from "../context/PodcastContext";
import ShowCard from "../components/ShowCard";
import Loading from "../components/UI/Loading";
import { GENRE_MAP } from "../data/genreMap";
import { Link } from "react-router-dom";

/**
 * HOMEPAGE / LISTING PAGE
 * 
 * -Displays list of podcast shows (fetched from API)
 * Users can search or filter by genre
 * Each show card has a Link to="/show/:id"
 * State (search + filter) is saved in Podcast Context
 * When user returns from ShowDetail, filters remain exactly as before
 */

export default function Home () {
    //Grab all shared state from Podcastcontext ( due to <PodcastProvider> in App.jsx)
    const {
        previews, //ALL podcast preview data (fetched once on mount)
        searchTerm, //Current search input
        setSearchTerm, //Update search
        selectedGenre, //Selected genre ID (e.g., "3")
        setSelectedGenre, //Update genre filter
        loading, // Show spinner while loading
    } = usePodcast();

    /**
     * FILTER LOGIC
     * Runs every time searchTerm or selectedGenre changes
     * Keeps filtering fast because previews are already in memory
     */
    
}