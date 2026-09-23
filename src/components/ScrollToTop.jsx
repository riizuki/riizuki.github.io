import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisScroll } from '../context/LenisContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { lenis } = useLenisScroll();

  useEffect(() => {
    if (lenis && lenis.current) {
      lenis.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
