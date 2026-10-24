import { motion } from 'framer-motion';

export default function Prerequisites() {
  const items = [
    "Ser membro cadastrado da Lagoinha Toledo",
    "Estar participando de um GC",
    "Ter finalizado a Jornada do Membro",
    "Ser batizado"
  ];

  return (
    <section id="requisitos" className="scroll-mt-16 bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Pré-requisitos
        </motion.h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <span className="font-bold text-black">✓</span>
              </div>
              <p className="text-lg text-black">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
