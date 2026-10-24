import { motion, useReducedMotion } from 'framer-motion';
import { publicUrl } from '../lib/publicUrl';
import { revealProps } from '../lib/motion';

const pillars = [
  { title: 'Adoração', desc: 'Momentos de louvor que transformam vidas e aproximam as pessoas de Deus.', position: 'left center' },
  { title: 'Comunidade', desc: 'Uma família de músicos e ministros unidos pelo mesmo propósito.', position: 'center' },
  { title: 'Excelência', desc: 'Compromisso com a qualidade técnica e espiritual no serviço.', position: 'right center' },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...revealProps(reduceMotion)}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Sobre o Ministério</h2>
          <p className="mx-auto max-w-3xl text-lg text-black">
            Mais do que música, o Ministério de Louvor e Adoração é um canal de conexão com o Céu. Com vozes, instrumentos e discernimento espiritual, nosso time serve nos cultos para preparar o caminho, criando uma atmosfera onde as pessoas possam adorar livremente, encontrar Jesus e ser transformadas pelo Seu Espírito.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              {...revealProps(reduceMotion, { delay: index * 0.1 })}
              className="relative overflow-hidden rounded-xl bg-cover bg-no-repeat p-6 shadow-md"
              style={{
                backgroundImage: `url("${publicUrl('grid-adoracao.jpg')}")`,
                backgroundPosition: item.position,
              }}
            >
              <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
              <div className="relative">
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
