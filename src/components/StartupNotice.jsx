// components/StartupNotice.jsx
export default function StartupNotice({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-2">🚀 Heads Up!</h2>
        <p className="mb-4">
          This website uses Render's free backend hosting. It may take a few
          seconds to wake up on your first visit. Thank you for your patience!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
