# 🐾 Caopestre — Clínica Veterinária (Next.js 15 + TypeScript + Tailwind)

Landing page institucional da Caopestre, construída com **Next.js 15 (App Router)**,
**React 19**, **TypeScript** (strict) e **Tailwind CSS 3**.

## ⚡ Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
```

## 🏗️ Build de produção
```bash
npm run build
npm start
```

## 🚀 Deploy na Vercel
1. Suba o projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Em https://vercel.com → **Add New → Project** → importe o repositório.
3. Framework detectado automaticamente: **Next.js**. Sem variáveis de ambiente.
4. **Deploy**. Pronto. ✅

> Alternativa via CLI:
> ```bash
> npm i -g vercel
> vercel --prod
> ```

## 📁 Estrutura
```
app/
  layout.tsx        # fontes (Fraunces + Jakarta), metadata/SEO
  page.tsx          # composição das seções
  globals.css       # Tailwind + utilitários (.wrap, .btn, .reveal)
components/         # Header, Hero, Services, About, Trio, Differentials,
                    # Wild, Booking, CtaBand, Footer, WhatsAppFloat, Reveal, WaIcon
lib/site.ts         # conteúdo central (nav, serviços, depoimentos, WhatsApp...)
public/assets/      # logo, cão+gato, consultório, equipe
tailwind.config.ts  # paleta da marca (petrol, sand, brand-orange)
```

## ✏️ Personalização rápida
- **WhatsApp / telefone / endereço:** `lib/site.ts`
- **Cores da marca:** `tailwind.config.ts`
- **Imagens:** substitua os arquivos em `public/assets/` (mesmos nomes).

## ✅ Notas
- Componentes interativos (Header, Trio, Booking, Reveal) usam `"use client"`.
- `next/image` para otimização automática de imagens.
- Formulário de agendamento valida campos e bloqueia fins de semana,
  abrindo o WhatsApp com a mensagem pré-preenchida.
