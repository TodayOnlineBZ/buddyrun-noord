# Buddy Run Noord — website (prototype)

Vrolijke, fotogedreven onepager voor Buddy Run Noord, gebouwd met [Astro](https://astro.build) en gehost op Vercel.

## Lokaal draaien
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statische site in dist/
```
Vereist Node.js 22.23.4 of hoger (Astro 7).

## Structuur
- `src/pages/index.astro` — de pagina
- `src/data/content.ts` — teksten, galerij, sponsoren en formulierteksten
- `src/assets/photos/` — evenementfoto's (Astro maakt er AVIF/WebP in meerdere formaten van)
- `src/scripts/main.js` — header, menu, scrollanimaties, lightbox, formulierpanelen
- `src/styles/global.css` — huisstijl (#00385C, #2BC5F0, #FD891E, #1F1F1F), Fredoka + Cabin (zelf gehost)

## Nog te doen voor livegang op buddyrun-noord.nl
- Formulieren lopen via Web3Forms (key in `src/data/content.ts`). Beperk in het Web3Forms-dashboard de toegestane domeinen.
- Privacyverklaring staat op /privacy (laten goedkeuren door de organisatie).
- Domein: buddyrun-noord.nl (www verwijst door). DNS bij Cloud86: A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com.
- Datum volgende editie invullen zodra bekend (nu: "Nieuwe datum volgt").
