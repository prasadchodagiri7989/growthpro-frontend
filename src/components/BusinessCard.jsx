import { RefreshCw } from "lucide-react";

export default function BusinessCard({ data, onRegenerate }) {
  const capitalizeWords = (text) =>
    text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const businessName = capitalizeWords(data.name);
  const businessLocation = capitalizeWords(data.location);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg p-6 mt-8 max-w-xl mx-auto transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">{businessName}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{businessLocation}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-4 items-center text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐ <span className="font-medium">{data.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
            📝 <span>{data.reviews} reviews</span>
          </div>
        </div>
      </div>

      <div className="border-t dark:border-gray-600 pt-4">
        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
          “{data.headline}”
        </p>

        <button
          onClick={onRegenerate}
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition active:scale-95"
        >
          <RefreshCw size={18} />
          Regenerate Headline
        </button>
      </div>
    </div>
  );
}
