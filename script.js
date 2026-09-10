const sections=document.querySelectorAll("main section[id]");
const links=document.querySelectorAll("nav a");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    links.forEach(link=>link.classList.remove("active"));
    const active=document.querySelector(`nav a[href="#${entry.target.id}"]`);
    if(active)active.classList.add("active");
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>observer.observe(section));
