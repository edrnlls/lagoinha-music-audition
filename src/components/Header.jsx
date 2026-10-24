import { useEffect, useId, useState } from 'react';
import { NAV_LINKS } from '../lib/site';

const focusClass = 'rounded-md transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#conteudo" className={`min-w-0 truncate text-sm font-bold text-primary sm:text-xl ${focusClass}`}>
            Audição Lagoinha Music
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Seções">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={`text-gray-600 ${focusClass}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-primary md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
            <a
              href="#inscricao"
              onClick={closeMenu}
              className="rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-primary transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4"
            >
              Inscrever-se
            </a>
          </div>
        </div>
      </div>
      <nav
        id={menuId}
        aria-label="Seções"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-t border-gray-100 bg-white px-4 py-3 shadow-md md:hidden"
      >
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block px-3 py-2 text-gray-700 ${focusClass}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
