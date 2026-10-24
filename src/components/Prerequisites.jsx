import { motion, useReducedMotion } from 'framer-motion';
import { revealProps } from '../lib/motion';

const items = [
  'Ser membro cadastrado da Lagoinha Toledo',
  'Estar participando de um GC',
  'Ter finalizado a Jornada do Membro',
  'Ser batizado',
];

export default function Prerequisites() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="requisitos" className="scroll-mt-16 bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...revealProps(reduceMotion)}
          className="mb-12 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Pré-requisitos
        </motion.h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <motion.li
              key={item}
              {...revealProps(reduceMotion, { delay: index * 0.1, y: 0, x: -20 })}
              className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-black" aria-hidden="true">
                ✓
              </span>
              <p className="text-lg text-black">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
