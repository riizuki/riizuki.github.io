import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}
