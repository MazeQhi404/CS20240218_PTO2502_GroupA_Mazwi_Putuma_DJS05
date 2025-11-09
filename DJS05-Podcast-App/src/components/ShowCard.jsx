import { GENRE_MAP } from "../data/genreMap";

/** 
 * SHOW CARD COMPONENT
 * 
 * Used in Home.jsx to display each podcast in the grid
 * 
 */

export default function ShowCard({show}) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
            {/** Podcast Image - fills top of card */}
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-48 object-cover"

            />

            {/** Card Content */}
            <div className="p-4">
                {/**Title */}
                <h3 className="font-bold text-lg line-clamp-2">{show.title}</h3>

                {/** Seasons count -handles singular or plural */}
                <p className="text-sm text-gray-600 mt-1">
                    {show.seasons} {show.seasons === 1 ? "season" : "seasons"}
                </p>

                {/**Genre Tags */}
                <div className="mt-2 flex flex-wrap gap-1">
                    {show.genres.slice(0, 2).map((genreId) => (
                        <span
                          key={genreId}
                          className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                        >
                            {GENRE_MAP[genreId]}
                        </span>
                    ))}

                    {/** Show "+X more" if there are more tna 2 genres */}
                    {show.genres.length > 2 && (
                        <span className="text-xs text-gray-500">
                            +{show.genres.length - 2}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
