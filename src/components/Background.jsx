import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BannerImage from './BannerImage';
import { enterProps } from '../lib/motion';

export default function Background() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const banner = sectionRef.current;
    const cta = document.getElementById('inscricao');
    const header = document.querySelector('header');
    if (!banner || !cta || !header) return undefined;

    let active = true;

    const syncSize = () => {
      const headerHeight = header.offsetHeight;
      const ctaHeight = cta.offsetHeight;
      banner.style.paddingTop = `${headerHeight}px`;
      banner.style.height = `${headerHeight + ctaHeight}px`;

      const photo = banner.querySelector('.banner-photo');
      if (!photo) return;
      photo.style.top = `${headerHeight}px`;
      photo.style.bottom = 'auto';
      photo.style.height = `${ctaHeight}px`;
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(cta);
    observer.observe(header);
    window.addEventListener('resize', syncSize);
    document.fonts?.ready.then(() => {
      if (active) syncSize();
    });

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener('resize', syncSize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden text-white"
      aria-label="Abertura"
    >
      <BannerImage desktop="background-lp.jpg" mobile="background-mb.jpg" />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          {...enterProps(reduceMotion, { duration: 0.8 })}
          className="mb-6 font-ballinger text-[clamp(2.15rem,8vw,96px)] font-bold leading-none text-white"
        >
          LAGOINHA MUSIC
        </motion.h1>
        <motion.div {...enterProps(reduceMotion, { delay: 0.2, duration: 0.6 })}>
          <a
            href="#inscricao"
            className="inline-block rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-primary shadow-lg transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Fazer Inscrição
          </a>
        </motion.div>
      </div>
    </section>
  );
}
