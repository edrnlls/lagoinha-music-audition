import { motion, useReducedMotion } from 'framer-motion';
import BannerImage from './BannerImage';
import { INSCRIPTION_URL } from '../lib/site';
import { revealProps } from '../lib/motion';

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inscricao" className="relative scroll-mt-16 overflow-hidden pb-20 pt-32 text-white">
      <BannerImage desktop="background-lp.jpg" mobile="background-mb.jpg" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          {...revealProps(reduceMotion, { y: 12 })}
          className="mb-6 text-3xl font-bold text-balance md:text-5xl"
        >
          Pronto para dar o próximo passo?
        </motion.h2>
        <a
          href={INSCRIPTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-secondary px-10 py-4 text-lg font-bold text-black shadow-xl transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Fazer Inscrição
        </a>
      </div>
    </section>
  );
}
