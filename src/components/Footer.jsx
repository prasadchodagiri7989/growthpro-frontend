export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-12 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} GrowthProAI. All rights reserved.
      </p>
    </footer>
  );
}
