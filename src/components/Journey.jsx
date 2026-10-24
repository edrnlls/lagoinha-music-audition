import { motion } from 'framer-motion';

export default function Journey() {
  const steps = [
    { title: "Inscrição", desc: "Preencha o formulário de inscrição com seus dados." },
    { title: "Envio do Vídeo", desc: "Grave e envie seu vídeo de até 1 minuto, demonstrando sua execução técnica." },
    { title: "Avaliação", desc: "A equipe técnica do Lagoinha Music avalia seu vídeo e retorna com o feedback." },
    { title: "Audição Presencial", desc: "Se aprovado, a data da sua audição presencial será agendada." },
    { title: "Onboarding", desc: "Reunião de integração, visão do ministério e preenchimento da ficha de voluntário." }
  ];

  return (
    <section id="jornada" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-black md:text-4xl">Sua Jornada</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-black">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-xl bg-white p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-semibold text-black">{step.title}</h3>
                  <p className="text-black">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
