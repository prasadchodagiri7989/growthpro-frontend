import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import postDataImage from "../assets/post-business-data.png";
import getHeadlineImage from "../assets/get-regenerate-headline.png";

export default function ProjectDescription() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project Overview */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">📘 Project Description</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              <strong>GrowthProAI Mini Dashboard</strong> is a full-stack simulation that helps a local business monitor SEO headlines and business insights, inspired by Google Business tools.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>Express</strong>, this mobile-friendly app uses user input to dynamically generate AI-based SEO headlines.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">🧩 Key Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
              <li>Business input form: Name and Location</li>
              <li>Mock ratings, reviews, and AI-generated headline</li>
              <li>Dynamic regeneration of headlines via GET API</li>
              <li>Responsive UI with Dark Mode support</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">🛠️ Tech Stack</h3>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
              <li><strong>Frontend:</strong> React, Tailwind CSS, Lucide Icons</li>
              <li><strong>Backend:</strong> Node.js, Express.js, CORS</li>
              <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
            </ul>
          </div>

          {/* Integration */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">🔗 Integration</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Both endpoints are connected to the frontend using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">fetch</code> API, enabling real-time updates using React state without reloading the page.
            </p>
          </div>

          {/* API Endpoints */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition md:col-span-2">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">📡 API Endpoints</h3>

            {/* POST endpoint */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-blue-600 dark:text-blue-300">
                1. POST <code className="text-sm text-yellow-500">/business-data</code>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Accepts name and location as JSON payload and returns mock ratings, reviews, and an SEO headline.
              </p>
              <img
                src={postDataImage}
                alt="POST /business-data in Postman"
                className="mt-4 rounded-lg border border-gray-600 shadow-lg w-full max-w-3xl"
              />
            </div>

            {/* GET endpoint */}
            <div>
              <h4 className="text-lg font-bold text-blue-600 dark:text-blue-300">
                2. GET <code className="text-sm text-yellow-500">/regenerate-headline</code>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Generates a fresh SEO headline based on the same business name and location.
              </p>
              <img
                src={getHeadlineImage}
                alt="GET /regenerate-headline in Postman"
                className="mt-4 rounded-lg border border-gray-600 shadow-lg w-full max-w-3xl"
              />
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">🎯 Outcomes</h3>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
              <li>Built a complete end-to-end MERN-style mini app</li>
              <li>Handled client-server integration with clean UI/UX</li>
              <li>Practiced Tailwind CSS grid and responsive design</li>
              <li>Gained deeper understanding of RESTful APIs and state management</li>
              <li>Improved debugging and visual polish with dark mode</li>
            </ul>
          </div>

          {/* Note */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-2xl p-6 transition">
            <h3 className="text-2xl font-semibold text-red-400 mb-3">📝 Note</h3>
            <p className="text-sm italic text-gray-500 dark:text-gray-400">
              This project uses mock data stored in-memory. No external database or authentication layer is included.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
