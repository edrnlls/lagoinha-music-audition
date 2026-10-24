import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BannerImage from './BannerImage';

export default function Background() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const banner = sectionRef.current;
    const cta = document.getElementById('inscricao');
    const header = document.querySelector('header');
    if (!banner || !cta || !header) return;

    const syncSize = () => {
      const headerHeight = header.offsetHeight;
      const ctaHeight = cta.offsetHeight;
      banner.style.paddingTop = `${headerHeight}px`;
      banner.style.height = `${headerHeight + ctaHeight}px`;

      const photo = banner.querySelector('.banner-photo');
      if (photo) {
        photo.style.top = `${headerHeight}px`;
        photo.style.bottom = 'auto';
        photo.style.height = `${ctaHeight}px`;
      }
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(cta);
    observer.observe(header);
    window.addEventListener('resize', syncSize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncSize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden text-white"
    >
      <BannerImage desktop="/Background LP.jpg" mobile="/Background MB.jpg" />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="font-ballinger font-bold text-[96px] leading-none text-white mb-6"
        >
          LAGOINHA MUSIC
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#inscricao"
            className="inline-block rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-primary shadow-lg transition hover:brightness-95"
          >
            Fazer Inscrição
          </a>
        </motion.div>
      </div>
    </section>
  );
}
