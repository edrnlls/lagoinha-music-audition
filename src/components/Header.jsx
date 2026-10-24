export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Audição Lagoinha Music</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-gray-500 hover:text-primary transition">Sobre</a>
            <a href="#requisitos" className="text-gray-500 hover:text-primary transition">Requisitos</a>
            <a href="#jornada" className="text-gray-500 hover:text-primary transition">Jornada</a>
            <a href="#faq" className="text-gray-500 hover:text-primary transition">FAQ</a>
          </nav>
          <a
            href="#inscricao"
            className="bg-secondary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:brightness-95 transition"
          >
            Inscrever-se
          </a>
        </div>
      </div>
    </header>
  );
}