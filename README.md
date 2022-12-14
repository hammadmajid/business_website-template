![Pixova New GitHub Social Card](https://user-images.githubusercontent.com/67387019/210561021-70fed8d5-eb09-454e-aefa-d57dff61ac59.png)

# Pixova New

Production ready, modern & accessible website template built with **Astro.js** and **TailwindCSS** based on [Pixova Lite](https://colorlib.com/wp/themes/pixova-lite/) theme.

- [Live Preview](https://pixova-new.vercel.app/home)
- [Design Prototype](https://www.figma.com/community/file/1191395768220581342)

## Key Features

- Testimonials
- Contact Page
- Project Card *(coming soon)*
- Project Page *(coming soon)*
- Latest News Card *(coming soon)*

## Project Structure

```
.
├── public
│   ├── images
│   │   └── testimonial
│   │       ├── ali-morshedlou-unsplash.jpg
│   │       ├── joseph-gonzalez-unsplash.jpg
│   │       └── michael-dam-unsplash.jpg
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── contact
│   │   │   ├── Form.astro
│   │   │   └── Info.astro
│   │   ├── home
│   │   │   ├── Hero.astro
│   │   │   └── Testimonial.astro
│   │   ├── Footer.astro
│   │   └── NavBar.astro
│   ├── icons
│   │   └── favicon.svg
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Progress.astro
│   │   └── Slide.astro
│   ├── pages
│   │   ├── about
│   │   │   └── index.astro
│   │   ├── contact
│   │   │   └── index.astro
│   │   ├── home
│   │   │   └── index.astro
│   │   └── index.astro
│   └── env.d.ts
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Setup Guide

```bash
# Clone the repository
$ git clone https://github.com/hammadmajid/pixova-new.git

# Install the dependencies
$ npm ci 

# Build the site
$ npm run build

# Run the live preview
$ npm run preview
```

## Tech Stack

- Main Framework: [Astro.js](https://astro.build/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Icons: [Iconify](https://iconify.design/)
- UI/UX: [Figma](https://www.figma.com/)
- Deployment: [Vercel](https://vercel.com/)

## Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). For any questions or comment you can contact [hm.hammadmajid@gmail.com](mailto:hm.hammadmajid@gmail.com).

## Contributors guildlines

See the [contributing guide](./CONTRIBUTING.md) for detailed instructions on how to get started with this project. For more complex contributions, you can open an issue using the most appropriate [issue template](https://github.com/hammadmajid/pixova-new/issues/new/choose) to describe the changes you'd like to see.

If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/hammadmajid/pixova-new/issues) for something to work on, also checkout this Open-Source [Guide](https://opensource.guide/).

## License

This project is licensed under **General Public License v3.0**. You may copy, distribute and modify it under the terms and conditions contained in the file `LICENSE`.

## Credit

- Pixova Lite by ColorLib

---

<sub>Created with :heart: by [Hammad Majid](https://github.com/hammadmajid/)</sub>
