# Senior Product Manager Portfolio

A modern, responsive, and high-performance personal website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed with a "Linear-style" aesthetic focusing on minimalism and authority.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Modular Components**: Clean architecture with separate components for Hero, Experience, Skills, and Case Studies.
- **Dark Mode Aesthetic**: Premium dark theme with subtle gradients and glassmorphism.
- **Performance First**: Built on Vite for lightning-fast builds and loading.
- **Automated Deployment**: GitHub Actions workflow included for seamless deployment to GitHub Pages.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/pm-portfolio.git
    cd pm-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## Deployment to GitHub Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site to GitHub Pages whenever you push to the `main` branch.

### Setup Steps:

1.  Go to your repository **Settings** on GitHub.
2.  Navigate to **Pages** in the sidebar.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  Push your code to the `main` branch.
5.  The action will trigger automatically. Once complete, your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Important Note on Base Path

If you are deploying to a project page (e.g., `username.github.io/repo-name`), you may need to update the `base` property in `vite.config.ts`:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/repo-name/', // Add your repository name here
  // ... rest of config
})
```

If deploying to a user page (`username.github.io`), the base path should remain `/` (default).

## Customization

-   **Content**: Edit the data files in `src/data` (or directly in components) to update your experience, skills, and projects.
-   **Styling**: Modify `src/index.css` or `tailwind.config.js` (if added) to tweak the theme.
