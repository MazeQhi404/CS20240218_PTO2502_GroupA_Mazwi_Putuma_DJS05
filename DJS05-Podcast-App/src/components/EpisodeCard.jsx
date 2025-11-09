/**
 * EPISODE CARD COMPONENT
 * 
 * Used inside SeasonAccordion to display a single episode
 * 
 * Features:
 * - Shows episode number + title
 * - Displays description with fallback if missing
 * - Line-clamp-2 prevents overflow
 * - Placeholder image box (API doesn't provide episode images)
 * - Card uses flex layout
 */

export default function EpisodeCard({episode, episodeNumber }) {
    return (
        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      {/* Placeholder for episode image (API doesn't provide one) */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
          <span className="text-xs text-gray-500">No image</span>
        </div>
      </div>

      {/* Episode details */}
      <div className="flex-1">
        <h4 className="font-semibold text-indigo-900">
          Episode {episodeNumber}: {episode.title}
        </h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {episode.description || "No description available."}
        </p>
      </div>
    </div>

    );
}