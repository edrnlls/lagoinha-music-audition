import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Sobre o Ministério</h2>
          <p className="mx-auto max-w-3xl text-lg text-black">
            Mais do que música, o Ministério de Louvor e Adoração é um canal de conexão com o Céu. Com vozes, instrumentos e discernimento espiritual, nosso time serve nos cultos para preparar o caminho, criando uma atmosfera onde as pessoas possam adorar livremente, encontrar Jesus e ser transformadas pelo Seu Espírito.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Adoração", desc: "Momentos de louvor que transformam vidas e aproximam as pessoas de Deus.", position: "left center" },
            { title: "Comunidade", desc: "Uma família de músicos e ministros unidos pelo mesmo propósito.", position: "center" },
            { title: "Excelência", desc: "Compromisso com a qualidade técnica e espiritual no serviço.", position: "right center" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden p-6 rounded-xl shadow-md bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/grid-adoracao.jpg')",
                backgroundPosition: item.position,
              }}
            >
              <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
