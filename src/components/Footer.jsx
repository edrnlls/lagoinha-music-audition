export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">

        <p className="text-sm mt-6 opacity-70">
          © {new Date().getFullYear()} Lagoinha Toledo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
