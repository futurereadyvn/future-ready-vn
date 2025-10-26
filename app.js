(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    document.body.classList.add('fade');
    const here = location.pathname.replace(/\/index\.html$/, '');
    document.querySelectorAll('.menu a').forEach(a=>{
      const to = new URL(a.getAttribute('href'), location.href).pathname.replace(/\/index\.html$/, '');
      if(to===here){ a.classList.add('active'); }
    });
  });
  function shouldIntercept(a){
    if(!a) return false;
    const href = a.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('mailto:') || a.target === '_blank') return false;
    if(/^https?:\/\//.test(href)) return false;
    return true;
  }
  function onNav(e){
    const a = e.target.closest('a');
    if(!shouldIntercept(a)) return;
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(()=>{ location.href = a.getAttribute('href'); }, 160);
  }
  document.addEventListener('click', onNav, true);
})();
