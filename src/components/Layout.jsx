import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-current transition-colors duration-300 pt-24">
      <Navbar />
      <main className="flex-grow w-full px-0 sm:px-4 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
