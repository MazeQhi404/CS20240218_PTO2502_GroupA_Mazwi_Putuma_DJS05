/**
 * GLOBAL HEADER COMPONENT
 * 
 * This component is placed OUTSIDE <PodcastProvider> and <Routes> in App.jsx
 * meaning it appears on EVERY page (Home AND Show Detail)
 * 
 * Features:
 * - Fixed indigo background with shadow
 * - Responsive max-width container (Tailwind's max-w-7xl)
 * - App title + tagline
 */

export default function Header() {
    return (
        <header className="bg-indigo-600 text-white py-6 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold">Podcast Explorer</h1>
                <p className="text-indigo-200">Discover amazing shows</p>
            </div>
        </header>
    );
}