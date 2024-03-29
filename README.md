# Gangeshwar Krishnamurthy's personal website

[https://www.gangeshwark.com/](https://www.gangeshwark.com/)

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)


Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |




## Acknowledgements:
- Adapted from [Omar Elhawary's personal](https://github.com/oedotme/website) website.

## How to deploy to Firebase Hosting

- `yarn build`
- `firebase deploy`
