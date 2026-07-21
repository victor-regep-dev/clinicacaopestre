# 🐾 Caopestre — Clínica Veterinária (Next.js 15 + TypeScript + Tailwind)

Landing page institucional, **Next.js 15 (App Router)**, **React 19**, **TypeScript** (strict) e **Tailwind CSS 3**.

## ⚡ Rodar local
```bash
npm install
npm run dev    # http://localhost:3000
```

## 🚀 Deploy na Vercel
1. Suba para um repositório Git (GitHub/GitLab/Bitbucket).
   **IMPORTANTE:** garanta que a pasta `public/assets/*.png` foi commitada.
   ```bash
   git add public -f
   git commit -m "site + imagens"
   git push
   ```
2. Vercel → Add New → Project → importe o repo → Framework: **Next.js** → Deploy.

> Se as imagens sumirem em produção, quase sempre é porque `public/assets` não foi
> enviado ao Git. O `.gitignore` deste projeto já está configurado para NÃO ignorá-las.

## 📁 Estrutura
```
app/            layout (fontes/SEO), page, globals.css
components/     Header, Hero, Services, About, Trio, Differentials,
                Wild, Booking, CtaBand, Footer, WhatsAppFloat, Reveal, WaIcon
lib/site.ts     conteúdo central (nav, serviços, WhatsApp...)
public/assets/  logo.png, cao-gato.png, consultorio.png, equipe.png
```

## ✏️ Personalizar
- WhatsApp/telefone/endereço → `lib/site.ts`
- Cores da marca → `tailwind.config.ts`
- Imagens → substitua os arquivos em `public/assets/` (mesmos nomes).
