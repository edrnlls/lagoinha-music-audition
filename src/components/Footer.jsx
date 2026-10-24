import { NAV_LINKS, INSCRIPTION_URL } from '../lib/site';

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <nav aria-label="Rodapé" className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={INSCRIPTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition hover:text-white"
          >
            Inscrição
          </a>
        </nav>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Lagoinha Toledo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
