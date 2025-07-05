// src/pages/Index.jsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessForm from "../components/BusinessForm";
import BusinessCard from "../components/BusinessCard";

export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleFormSubmit = async (name, location) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/business-data`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, location }),
});

      const result = await res.json();
      setData({ ...result, name, location });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!data?.name || !data?.location) return;
    setLoading(true);
    try {
const res = await fetch(
  `${BACKEND_URL}/regenerate-headline?name=${data.name}&location=${data.location}`
);

      const result = await res.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 flex flex-col">
      <Navbar />

      <main className="flex-grow px-6">
        <h1 className="text-3xl font-bold text-center mt-10 mb-6 text-blue-400">
          Business SEO Dashboard
        </h1>

        <BusinessForm onSubmit={handleFormSubmit} />

        {loading && (
          <p className="text-center mt-4 text-blue-400">
            Loading...
          </p>
        )}

        {data && !loading && (
          <BusinessCard data={data} onRegenerate={regenerateHeadline} />
        )}
      </main>

      <Footer />
    </div>
  );
}
