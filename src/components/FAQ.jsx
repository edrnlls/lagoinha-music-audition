import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import BannerImage from './BannerImage';

const faqs = [
  {
    q: 'Preciso ser membro da Lagoinha?',
    a: 'Sim. A integração ao ministério acontece dentro da trilha de membresia da igreja, incluindo participação no treinamento de voluntários, aprovação na audição e processo de integração ministerial.',
  },
  {
    q: 'O ministério atua em todos os cultos?',
    a: 'Sim. O Lagoinha Music serve nos cultos e programações da igreja, apoiando os momentos de louvor, adoração e ministração.',
  },
  {
    q: 'Posso me inscrever para mais de uma função?',
    a: 'Sim. No formulário você pode selecionar mais de uma pretensão (voz, instrumentos, etc.).',
  },
  {
    q: 'Preciso cantar ou tocar algum instrumento para participar?',
    a: 'Sim, normalmente o ministério envolve pessoas com dons musicais, como vocalistas e instrumentistas, mas também pode contar com apoio em organização e bastidores.',
  },
  {
    q: 'Como funcionam as escalas?',
    a: 'Após o processo de integração, os integrantes passam a fazer parte das escalas do ministério conforme o planejamento da equipe administrativa e a necessidade dos cultos. A agenda mensal considera a disponibilidade ou a indisponibilidade de cada voluntário.',
  },
  {
    q: 'Preciso ter alguma experiência como músico ou cantor?',
    a: 'Sim, a experiência é importante, mas não é o único critério. Valorizamos caráter, coração ensinável, compromisso e disposição para crescer.',
  },
  {
    q: 'O que acontece se eu não for aprovado no vídeo?',
    a: 'Você receberá um agradecimento pela participação. Seus dados são mantidos por 45 dias e depois descartados.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="relative scroll-mt-16 overflow-hidden bg-black py-20">
      <BannerImage desktop="bg-black.jpg" mobile="bg-black-mb.jpg" zoom={false} />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-white/15">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 bg-white p-5 text-left text-base font-medium text-black hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {faq.q}
                  <span className="text-primary" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      className="overflow-hidden px-5 pb-5 text-white"
                    >
                      <p className="pt-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
