# 📝 **Frontend Mentor – Todo App**

![Design preview for the Todo app coding challenge](./design/desktop-preview.jpg)

## 👋 Welcome

A clean and fully responsive Todo application built as a **professional workflow exercise**.
Developed with **React + Vite**, **ESLint/Prettier**, **semantic components**, and deployed via **Netlify** with **GitHub Actions CI**.

---

## 🧩 Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Setup & Local Run](#setup--local-run)
- [Code Quality](#code-quality)
- [Features](#features)
- [Accessibility Notes](#accessibility-notes)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Reflection](#reflection)
- [Acknowledgements](#acknowledgements)

---

## 💡 Overview

- Challenge → [Frontend Mentor Todo App](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
- Purpose → Practise **React state logic**, **professional GitHub Flow**, **project setup**, **deployment**, and **CI automation**.
- Timeframe → Late November setup → December feature development.

---

## 🛠️ Built With

- **React + Vite**
- **ESLint** for code consistency
- **Prettier** for formatting
- **Netlify** for deployment
- **GitHub Actions** for CI
- **CSS Modules** or **standard CSS** (depending on your preference)
- **Modern browser APIs**

### Optional dev tools

```bash
npm install
npm run lint       # check for code issues
npm run format     # auto-format with Prettier
npm run build      # production build for Netlify
```

---

## ⚙️ Setup & Local Run

```bash
git clone https://github.com/<your-username>/todo-app
cd todo-app
npm install
npm run dev
```

### 🛠 Project Commands

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start local development server                   |
| `npm run build`        | Build for production (`dist/` folder)            |
| `npm run preview`      | Preview production build locally                 |
| `npm run lint`         | Run ESLint checks                                |
| `npm run lint:fix`     | Auto-fix some ESLint issues                      |
| `npm run format`       | Format files using Prettier                      |
| `npm run format:check` | CI / pre-commit style “is everything formatted?” |

---

## 🧹 Code Quality

This project uses **ESLint** + **Prettier** + (optional) **pre-commit hooks** to ensure consistent, clean code.

### 🔧 Lint & Format Setup

When dependencies are installed:

- `.eslintrc` / `eslint.config.js` configures recommended React + JS rules
- `.prettierrc` controls formatting
- `.prettierignore` excludes build folders

### 🪶 Pre-commit Hook (optional)

A custom script can be enabled to run automatically:

1. **ESLint** → checks & fixes simple issues
2. **Prettier** → formats code
3. Commit proceeds only if the codebase is clean

This keeps the main branch consistent and professional ✨

---

## 🚀 Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- Branch: `main`

Once deployed, the live link will be:

➡️ **https://<your-netlify-domain>.netlify.app**
_(Replace with your actual link when ready)_

---

## ⚙️ CI Pipeline (GitHub Actions)

A lightweight CI workflow runs on:

- Push to `main`
- Pull requests into `main`

It checks:

- `npm install`
- `npm run lint`
- (Optional) `npm run test`

---

## ✨ Features

- Add new todos
- Mark todos as complete
- Delete todos
- Filter by **All / Active / Completed**
- Clear completed
- Light/dark mode toggle
- Fully responsive layout (mobile → desktop)
- Optimised hover & focus styles
- (Bonus) Drag-and-drop reordering

---

## ♿ Accessibility Notes

- Keyboard navigation supported across all interactive elements
- Visible focus indicators using `:focus-visible`
- Semantic HTML structure (`header`, `main`, `ul`, `li`, etc.)
- Buttons instead of clickable divs
- Labels or `aria-label` where appropriate
- High colour contrast for both light and dark theme
- Screen-reader friendly announcements for dynamic changes (e.g., completed items)

---

## 📸 Screenshots

> Add these once the UI is ready.

### 🖥️ Desktop

![Desktop screenshot](./docs/screenshot-desktop.png)

### 📱 Mobile

![Mobile screenshot](./docs/screenshot-mobile.png)

---

## 🌐 Live Demo

➡️ **Coming soon (Netlify link to be added)**

---

# 🪞 Reflection

| Topic           | Notes                                                                                           |
| :-------------- | :---------------------------------------------------------------------------------------------- |
| Setup           | Practised professional React project structure with Vite                                        |
| ESLint/Prettier | Configured consistent formatting + CI linting                                                   |
| Deployment      | First time deploying a React/Vite project to Netlify                                            |
| React           | Strengthened state logic, list rendering, derived states (filters), controlled input patterns   |
| A11Y            | Ensured full keyboard operability and visible focus patterns                                    |
| Workflow        | Improved confidence using GitHub Issues, branching, PR flow, and CI status checks               |
| UI/UX           | Learned how theme toggles, filter controls, and responsive layouts fit together in modern React |

---

## 🙌 Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io) for the challenge design.
- Accessibility guidelines from [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/).
- Netlify documentation for deployment workflow.
