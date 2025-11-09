import {useState} from "react";
import EpisodeCard from "./EpisodeCard.jsx";

/** 
 * SEASON ACCORDION COMPONENT
 * 
 * Used in ShowDetail.js to display each season
 * 
 * Features:
 * - Click to open/close (controlled by useState)
 * - Shows season number + episode count
 * - Displays season image if available
 * - Renders all episodes using <EpisodeCard />
 * - Smooth hover + transition effects
 * - Mobile-friendly full-width button
 */

export default function SeasonAccordion({season}) {
    //Controls whether this season is expanded or collapsed
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            {/**ACCORDION HEADER -CLICK TO TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
            >
                <div>
                    <span className="font-semibold text-lg">Season {season.season}</span>
                    <span className="text-gray-600 ml-3">
                        {season.episodes.length} episode{season.episodes.length !== 1 ? "s" : ""}
                    </span>
                </div>
                {/**Plus/Minus icon */}
                <span className="text-2xl font-light">{isOpen ? "-" : "+"}</span>
            </button>

            {/** ACCORDION CONTENT - ONLY SHOW WHEN OPEN */}
            {isOpen && (
                <div className="p-6 bg-white">
                    {/** Season image */}
                    {season.image && (
                        <img
                          src={season.image}
                          alt={`Season ${season.season}`}
                          className="w-full max-w-md mx-auto rounded-lg shadow-md mb-6"
                        />
                    )}

                    {/**Episode List */}
                    <div className="space-y-6">
                        {season.episodes.map((episode, index) => (
                            <EpisodeCard
                              key={index}
                              episode={episode}
                              episodeNumber={index + 1}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}