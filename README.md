# Tanya Patel — React Portfolio

A responsive dark-neon portfolio built with React, Vite, and Lucide icons.

## Included
- Responsive navigation and active section highlighting
- Hero section with resume download and GitHub/LinkedIn icons
- About section with quote
- Skills and project cards with demo/repository links
- Internship experience with Cognevance marked Ongoing
- Contact form that prepares an email using `mailto:`
- Dark neon cyan/purple styling and scroll reveal animations

## Run locally
1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal inside this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Required public files
Copy these existing assets into the `public/` folder:
- `Tanya_Patel_resume.pdf`
- `tanya-photo.jpeg`

The app will run without the profile photo (it has a remote fallback), but add the local file for best reliability. The resume download requires the PDF to be present at `public/Tanya_Patel_resume.pdf`.

## Build for deployment
```bash
npm run build
```
The production output is generated in `dist/`.

## Deploy to Vercel
Import the project/repository in Vercel. Framework preset: Vite. Build command: `npm run build`; output directory: `dist`.
