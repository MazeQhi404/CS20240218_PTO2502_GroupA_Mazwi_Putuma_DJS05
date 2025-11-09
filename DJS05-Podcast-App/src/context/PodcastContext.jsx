import { createContext, useContext, useState, useEffect} from "react";
import { fetchAllPreviews } from "../api/fetchData";

const PodcastContext = createContext();

/**
 * Provides shared state for:
 * - All podcast previews
 * - Search term
 * - Selected genre filter
 * This ensures filters persist when navigating back from ShowDetail
 */
export function PodcastProvider({ children }) {
  // All podcast previews (fetched once)
  const [ previews, setPreviews ] = useState([]);

  //Filter controls
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  //Global loading indicator
  const [loading, setLoading] = useState(true);

  //Fetch all podcast previews on initial mount only
  useEffect(() => {
    const loadPreviews = async () => {
      try {
        const data = await fetchAllPreviews();
        setPreviews(data);
      } catch (err) {
        console.error("Failed to load previews:", err);
      } finally {
        setLoading(false);
      }
    };
    loadPreviews();
  }, []); // empty dependency array = run once on mount

  //Provide all the shared data to child components
  return (
    <PodcastContext.Provider
      value={{
        //Data
        previews,
        searchTerm,

        //Search state + setters
        setSearchTerm,
        selectedGenre,

        //Genre filter state + setters
        setSelectedGenre,
        loading,
      }}
    >
      {children}
    </PodcastContext.Provider>

  );
}

//Custom hook so components can easily grab context
export const usePodcast = () => useContext(PodcastContext);