
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let fechar = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

fechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const btnContato = document.getElementById('btn-entre-em-contato');
    btnContato.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
  
