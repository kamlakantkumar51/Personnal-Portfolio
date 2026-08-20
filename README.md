# Premium React Developer Portfolio

A modern, high-performance, and fully responsive software engineering portfolio built from the ground up using **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with clean code, premium glassmorphism, responsive timelines, and smooth animations, it is optimized to impress recruiters and secure engineering roles.

---

## 🚀 Key Features

* **Glassmorphic & Gradient Design**: Stunning visual aesthetics, customized scrollbars, and vibrant radial glowing accents.
* **Light / Dark Mode**: Fully integrated theme toggler that persists selection in local storage.
* **Framer Motion Animations**: Micro-animations on interactive cards, sliding indicators, and viewport scroll reveal entries.
* **Swiper Carousel**: Dynamic carousel slider for featured project showcases and testimonials.
* **DSA & Coding Profile Center**: Highlights active LeetCode, GitHub, GeeksforGeeks, and HackerRank statistics in customized card decks.
* **Reactive Contact Form**: Custom regex validation, loading submission states, and live **EmailJS** integration with developer fallback simulation.
* **Responsive Layouts**: Designed mobile-first to ensure pixel-perfect rendering across all viewports (mobile, tablet, desktop).
* **SEO Optimized**: Preconnected font APIs, pre-rendering meta headers, Twitter cards, and Open Graph tags.

---

## 🛠️ Tech Stack

* **Frontend**: React.js (Vite template)
* **Styling**: Tailwind CSS & Vanilla CSS
* **Animations**: Framer Motion & React Type Animation
* **Carousels**: Swiper.js
* **Alert Notifications**: React Hot Toast
* **Email Service**: EmailJS Browser Client
* **Icons**: React Icons (Si, Fa, Fi)

---

## 📦 Getting Started

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/kamlakantkumar51/my-portfolio.git
cd my-portfolio
npm install
```

### 2. Development Server

Start the Vite hot-reloading development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Production Build

Compile and optimize the code bundle:

```bash
npm run build
```

Verify output using:

```bash
npm run preview
```

---

## ⚙️ Customization Guide

All personal profiles, projects, skills, and timelines are decoupled from the layout files. To update the contents:

1. Open `src/data/portfolioData.js`.
2. Edit the variables:
   * **`personalInfo`**: Change name, role, email, social links, location, and bio description.
   * **`skillsData`**: Add, remove, or modify technical skills, progress levels, and brand colors.
   * **`experiences`**: Add internships, jobs, or academic accomplishments.
   * **`projects`**: Register new projects, tech badges, GitHub paths, features, and score metrics.
   * **`codingProfiles`**: Update usernames, active streak counters, and links to LeetCode, GFG, GitHub, etc.
   * **`testimonials`**: Replace feedback comments and avatar seeds.

### Resume Setup

Replace the file `public/My-resume.pdf` with your actual PDF resume. Keep the filename exactly same or update the `resumeUrl` key in `portfolioData.js`.

### Contact Form (EmailJS Integration)

To connect the form to your EmailJS account:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an email service (e.g., Gmail) and fetch your `Service ID`.
3. Create an email template and fetch your `Template ID`.
4. Fetch your API `Public Key` from the Account tab.
5. Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
*If keys are not configured, the website automatically falls back to a mock simulation mode so form submissions remain visually testable.*

---

## 📂 Project Structure

```
src/
├── assets/             # Assets and custom graphic components
├── components/         # Reusable UI widgets (Navbar, ScrollToTop, ThemeToggle)
├── data/               # Decoupled data models (portfolioData.js)
├── hooks/              # Custom React hooks (useTheme)
├── sections/           # High-fidelity layout modules (Hero, Skills, Projects, etc.)
├── App.css             # Cleared template styles
├── App.jsx             # Main page frame assembly
├── index.css           # Global Tailwind configurations & layers
└── main.jsx            # DOM loader script
```
