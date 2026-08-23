import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-current transition-colors duration-300 pt-20 relative">
      <Navbar />
      <main className="flex-grow w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
