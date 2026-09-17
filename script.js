(function(){
  // Mobile menu toggle
  var menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
  });
  document.querySelectorAll('nav.main a').forEach(function(a){
    a.addEventListener('click', function(){ document.body.classList.remove('nav-open'); });
  });

  // Font size controls
  var root = document.documentElement;
  var base = 16;
  function setSize(px){
    root.style.setProperty('--font-size-base', px+'px');
  }
  document.getElementById('fontUp').addEventListener('click', function(){
    base = Math.min(base+2, 22); setSize(base);
  });
  document.getElementById('fontDown').addEventListener('click', function(){
    base = Math.max(base-2, 13); setSize(base);
  });
  document.getElementById('fontReset').addEventListener('click', function(){
    base = 16; setSize(base);
  });

  // Safety quick-exit: redirects immediately to a neutral site
  document.getElementById('exitBtn').addEventListener('click', function(){
    window.location.replace('https://www.google.com');
  });
  // Also allow pressing ESC three times quickly as a panic exit
  var escCount = 0, escTimer = null;
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      escCount++;
      clearTimeout(escTimer);
      escTimer = setTimeout(function(){ escCount = 0; }, 1200);
      if(escCount >= 3){ window.location.replace('https://www.google.com'); }
    }
  });

  // Contact form — demonstração acadêmica: valida os campos e confirma visualmente,
  // sem enviar os dados a nenhum servidor, e-mail ou serviço externo.
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Mensagem registrada ✓';
    btn.disabled = true;
    form.reset();
    setTimeout(function(){
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3500);
  });
})();