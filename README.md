# Audição Lagoinha Music Toledo

Landing page estática do processo de audição do ministério de louvor da Igreja Batista da Lagoinha Toledo.

Repositório: https://github.com/edrnlls/lagoinha-music-audition

O site publicado é só arquivo estático. Não há servidor, banco, cookies, login nem variáveis de ambiente. A página não pede câmera, microfone, localização nem outros recursos do aparelho. O único destino externo é o formulário público de inscrição, aberto quando a pessoa clica no botão.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 3
- Motion

A fonte Inter fica no próprio site. Nenhuma fonte é carregada de outro domínio.

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

Os arquivos finais ficam na pasta `dist/`. Essa pasta não entra no Git.

## Personalização

- O link do formulário fica em `src/lib/site.js`.
- As cores ficam no `tailwind.config.js`.
- Os textos ficam nos componentes em `src/components`.

## Deploy na Vercel

O `vercel.json` define o build `npm run build`, a pasta `dist` e cabeçalhos que limitam scripts, imagens e fontes ao próprio endereço do site.

1. A branch `main` deste repositório é a fonte.
2. Em [vercel.com/new](https://vercel.com/new), importe somente `lagoinha-music-audition`. Se a Vercel pedir acesso ao GitHub, não autorize todos os repositórios.
3. Confirme o framework Vite e publique.

Não há GitHub Actions. A pasta `.vercel`, criada pela CLI na máquina de quem publica, fica fora do Git. Nenhum token fica neste projeto.
