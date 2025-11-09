/**
 * REUSABLE LOADING COMPONENT
 *
 * Used in BOTH Home.jsx AND ShowDetail.jsx
 * 
 * Features:
 * - Tailwind spinner animation
 * - Accepts custom message via props
 * - Centered layout with proper spacing
 * - Default message: "Loading..."
*/

export default function Loading({ message = "Loading..."}) {
    return (
        <div className="flex flex-col items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">{message}</p>
        </div>
    );
}
