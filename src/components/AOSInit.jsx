'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
      delay: 50,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false // ensures AOS runs on mobile as well as desktop
    });
  }, []);

  useEffect(() => {
    // Refresh AOS instances on route changes
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
