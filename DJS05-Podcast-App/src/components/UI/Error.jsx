/**
 * REUSABLE ERROR COMPONENT
 * 
 * Used in ShowDetail.jsx (and optionally in Home.jsx)
 * 
 * Features:
 * - Red text for immediate visibility
 * - Large, bold font so user KNOWS something went wrong
 * - Accepts custom error message via props
 * - Default message: "Something went wrong"
*/

export default function Error({ message = "Something went wrong" }) {
    return (
        <div className="text-center py-16">
            <p className="text-red-600 text-xl font-semibold">
                {message}
            </p>
            <p className="text-gray-600 mt-4">
                "Please try refreshing the page or come back later."
            </p>
        </div>
    )
}