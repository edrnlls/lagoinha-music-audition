import { motion, useReducedMotion } from 'framer-motion';
import { revealProps } from '../lib/motion';

const steps = [
  { title: 'Inscrição', desc: 'Preencha o formulário de inscrição com seus dados.' },
  { title: 'Envio do Vídeo', desc: 'Grave e envie seu vídeo de até 1 minuto, demonstrando sua execução técnica.' },
  { title: 'Avaliação', desc: 'A equipe técnica do Lagoinha Music avalia seu vídeo e retorna com o feedback.' },
  { title: 'Audição Presencial', desc: 'Se aprovado, a data da sua audição presencial será agendada.' },
  { title: 'Onboarding', desc: 'Reunião de integração, visão do ministério e preenchimento da ficha de voluntário.' },
];

export default function Journey() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="jornada" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-black md:text-4xl">Sua Jornada</h2>
        <div className="relative">
          <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-primary/20 md:block" aria-hidden="true" />
          <ol className="space-y-12">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                {...revealProps(reduceMotion, { delay: index * 0.1 })}
                className="flex items-start gap-6"
              >
                <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-black">
                  <span className="sr-only">Passo </span>
                  {index + 1}
                </div>
                <div className="flex-1 rounded-xl bg-white p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-semibold text-black">{step.title}</h3>
                  <p className="text-black">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
