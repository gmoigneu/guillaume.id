export default {
  projectLink: "https://github.com/gmoigneu", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/gmoigneu/guillaume.id/blob/main", // base URL for the docs repository
  titleSuffix: " – Guillaume Moigneu",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Shu Ding.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>Guillaume Moigneu's personal website</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Guillaume Moigneu's personal website" />
      <meta name="og:title" content="Guillaume Moigneu's personal website" />
    </>
  ),
};
