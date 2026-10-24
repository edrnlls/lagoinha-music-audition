import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BannerImage from './BannerImage';

const faqs = [
  {
    q: "Preciso ser membro da Lagoinha?",
    a: "Sim. A integração ao ministério acontece dentro da trilha de membresia da igreja, incluindo participação no treinamento de voluntários, aprovação na audição e processo de integração ministerial."
  },
  {
    q: "O ministério atua em todos os cultos?",
    a: "Sim. O Lagoinha Music serve nos cultos e programações da igreja, apoiando os momentos de louvor, adoração e ministração."
  },
  {
    q: "Posso me inscrever para mais de uma função?",
    a: "Sim. No formulário você pode selecionar mais de uma pretensão (voz, instrumentos, etc.)."
  },
  {
    q:"Preciso cantar ou tocar algum instrumento para participar?",
    a: "Sim, normalmente o ministério envolve pessoas com dons musicais, como vocalistas e instrumentistas, mas também pode contar com apoio em organização e bastidores."
  },
  {
    q:"Como funciona as escalas",
    a:"Após o processo de integração, os integrantes passam a fazer parte das escalas do ministério conforme planejamento da equipe administrativa e necessidade dos cultos. Sempre considerando projeção de agenda mensal conforme disponibilidade ou indisponibilidade de cada voluntário."
  },
  {
    q: "Preciso ter alguma experiência como músico ou cantor?",
    a: "Sim, a experiência é importante, mas não é o único critério. Valorizamos caráter, coração ensinável, compromisso e disposição para crescer."
  },
    {
    q: "O que acontece se eu não for aprovado no vídeo?",
    a: "Você receberá um agradecimento pela participação. Seus dados são mantidos por 45 dias e depois descartados."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-16 overflow-hidden bg-black py-20">
      <BannerImage desktop="/BG Black .jpg" mobile="/BG Black MB.jpg" zoom={false} />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="overflow-hidden rounded-xl border border-white/15">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between bg-white p-5 text-left text-lg font-medium hover:bg-secondary"
              >
                {faq.q}
                <span className="text-primary" aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-5 pb-5 mt-5 text-gray-300"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
