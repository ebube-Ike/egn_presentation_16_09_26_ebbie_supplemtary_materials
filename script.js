const links = document.querySelectorAll('.site-header nav a');
const sections = [...links]
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.setAttribute('aria-current', active ? 'page' : 'false');
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
