import { motion } from 'framer-motion';
import BannerImage from './BannerImage';

export default function CTA() {
  return (
    <section id="inscricao" className="relative scroll-mt-16 overflow-hidden pt-32 pb-20 text-white">
      <BannerImage desktop="/Background LP.jpg" mobile="/Background MB.jpg" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-5xl font-bold md:text-4xl"
        >
          Pronto para dar o próximo passo?
        </motion.h2>
        <a
          href="https://forms.gle/DTB9g32W89KVK3nh7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-secondary px-10 py-4 text-lg font-bold text-black shadow-xl transition hover:brightness-95"
        >
          Fazer Inscrição
        </a>
      </div>
    </section>
  );
}
