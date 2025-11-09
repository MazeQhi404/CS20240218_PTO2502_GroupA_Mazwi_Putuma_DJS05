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
    const filteredShows = previews.filter((show) => {
        const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = !selectedGenre || show.genres.includes(Number(selectedGenre));
        return matchesSearch && matchesGenre;
    });

    //Show loading spinner while previews are being fetched (only on first load)
    if (loading) return <Loading message="Loading podcasts..."/>

    return (
        <div className="max-w-7xl ms-auto px-4 py-8">
            {/** ======================== SEARCH & FILTER UI ===================== */}
            <div className="mb-8 space-y-4">
                {/** Search Imput */}
                <input
                  type="text"
                  placeholder="Search podcasts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {/**Genre Filter Dropdown */}
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                >
                    <option value="">All Genres</option>
                    {Object.entries(GENRE_MAP).map(([id, title]) => (
                        <option key={id} value={id}>
                            {title}
                        </option>
                    ))}
                </select>
            </div>

            {/** ======================== PODCAST GRID ============================ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredShows.map((show) => (
                    <Link
                      key={show.id}
                      to={`/show/${show.id}`}
                      // Optional: pass state for future use (e.g., scroll position)
                      state={{fromHome: true}}
                    >
                        <ShowCard show={show} />
                    </Link>
                ))}
            </div>

            
        </div>
    )


    
}