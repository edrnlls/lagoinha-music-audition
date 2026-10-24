# Audição Lagoinha Music Toledo

Landing page do processo de audição do ministério de louvor da Igreja Batista da Lagoinha Toledo.

Repositório: [lagoinha-music-audition](https://github.com/edrnlls/lagoinha-music-audition)

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 3
- Motion (Framer Motion)

## Como rodar localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse no navegador: `http://localhost:5173`

## Build para produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`. O `base` do Vite é relativo (`./`), então as imagens e o JavaScript funcionam tanto no servidor local quanto no GitHub Pages.

## Personalização

- O link do formulário fica em `src/lib/site.js`.
- As cores ficam no `tailwind.config.js`.
- Os textos ficam nos componentes em `src/components`.

## Deploy

O workflow `.github/workflows/pages.yml` publica a pasta `dist` no GitHub Pages a cada push na branch `main`.

Nas configurações do repositório, em Pages, a origem precisa ser **GitHub Actions**.
