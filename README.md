# kep1n.zip — Personal Portfolio

A modern personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, showcasing front-end development, UI/UX design, and selected creative projects.

This portfolio was redesigned with a **Corporate · Minimal · Elegant · Editorial** design philosophy while preserving the original identity of **kep1n.zip**.

---

## ✨ Overview

The website features two distinct themes:

### ☀️ Light Theme

* Pink & White color palette
* Subtle cinematic video background
* Clean and modern aesthetic
* Soft visual depth while maintaining readability

### 🌙 Dark Theme

* Beige & Brown color palette
* Warm editorial atmosphere
* Professional and elegant appearance
* Gradient-based background without video

---

## 🚀 Features

* Fully responsive layout
* Light / Dark theme toggle
* Smooth scrolling navigation
* Editorial-style hero section
* About section
* Skills showcase
* Projects portfolio
* Contact form
* Social media links
* Mobile navigation menu
* SEO-friendly metadata
* Custom 404 page
* robots.txt
* sitemap.xml
* llms.txt
* Accessibility-conscious structure

---

## 🛠 Tech Stack

### Front-End

* React
* Vite
* Tailwind CSS v4
* JavaScript (ES6+)

### Styling

* CSS Variables
* Tailwind Utilities
* Responsive Layouts

### Typography

* DM Sans
* Playfair Display

---

## 🎨 Theme System

The portfolio uses CSS variables to ensure consistent theme switching across all components.

### Light Theme

Primary Identity:

```text
Pink + White
```

Characteristics:

* Bright
* Friendly
* Modern
* Minimal

Background:

```text
Subtle MP4 Video
+
White / Pink Overlay
```

---

### Dark Theme

Primary Identity:

```text
Beige + Brown
```

Color Palette:

```text
Background
#E7CEB5

Primary Brown
#551705

Dark Brown
#3A0E03

Light Beige
#F2E3D3
```

Characteristics:

* Warm
* Elegant
* Corporate
* Editorial

Background:

```text
Beige Gradient
+
Brown Ambient Accents
```

The video background is disabled in dark mode.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── 0830(1).mp4
│   ├── logos/
│   ├── projects/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
│
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── Background.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FirstSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OtherProject.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Default Vite URL:

```text
http://localhost:5173
```

---

## 🔨 Production Build

Generate production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

The production output will be generated inside:

```text
dist/
```

---

## ⚡ Build Verification

This project has been tested with:

```bash
npm ci
npm run build
npm run dev
```

The application successfully installs dependencies, builds correctly, and runs in development mode using the commands above.

---

## 📜 Available Scripts

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

---

## 🎥 Background System

The background system is managed from:

```text
src/components/Background.jsx
```

### Light Theme

Uses:

```text
public/0830(1).mp4
```

Features:

* Autoplay
* Muted
* Looping
* Low opacity
* Decorative only

The video remains subtle to avoid reducing content readability.

### Dark Theme

Uses:

```text
Beige / Brown Gradient
```

Features:

* No video
* Warm visual atmosphere
* Editorial-inspired appearance

---

## 🖼 Assets

### Technology Logos

```text
HTML
CSS
JavaScript
React
Tailwind CSS
MongoDB
MySQL
Go
C++
Figma
Microsoft 365
```

Stored inside:

```text
public/logos/
```

### Project Images

Stored inside:

```text
public/projects/
```

---

## ♿ Accessibility

Accessibility considerations include:

* Semantic HTML structure
* Accessible navigation
* Responsive layouts
* Consistent heading hierarchy
* Readable typography
* Decorative media marked appropriately
* Theme-aware contrast levels

---

## 🔍 SEO

Included SEO features:

* Page title
* Meta description
* Open Graph metadata
* Canonical URL
* Favicon
* robots.txt
* sitemap.xml
* llms.txt

Before deploying to a production domain, update URLs and metadata to match the final domain.

---

## 🚀 Deployment

Compatible with:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages
* Static hosting providers

Deployment workflow:

```bash
npm ci
npm run build
```

Upload:

```text
dist/
```

to your hosting provider.

---

## 🎯 Design Direction

The portfolio intentionally avoids:

* Excessive neon effects
* Heavy glassmorphism
* Overly futuristic visuals
* Distracting animations

Instead, it focuses on:

* Clean layouts
* Strong typography
* Meaningful whitespace
* Professional presentation
* Editorial aesthetics
* Long-term maintainability

Design philosophy:

> Corporate · Minimal · Elegant · Editorial

---

## 👤 Author

**Johanes Kevin Agustahadi**

Front-End Developer · UI/UX Designer

Portfolio project built using React, Vite, and Tailwind CSS.

---

## 📄 License

This repository is intended for personal portfolio use.

Unless otherwise stated, all original content, project screenshots, images, logos, and branding assets remain the property of their respective owners.
