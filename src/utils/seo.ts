export const META_DEFAULTS = {
  title: 'Amar Nath Kumar - Web Developer',
  description: 'Professional web developer specializing in modern web technologies and creative solutions.',
  keywords: 'web developer, frontend developer, react developer, javascript developer',
  author: 'Amar Nath Kumar',
};

export function generateMetaTags(customMeta = {}) {
  const meta = { ...META_DEFAULTS, ...customMeta };
  
  return [
    { name: 'description', content: meta.description },
    { name: 'keywords', content: meta.keywords },
    { name: 'author', content: meta.author },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'twitter:title', content: meta.title },
    { property: 'twitter:description', content: meta.description },
  ];
}