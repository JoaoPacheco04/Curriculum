const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Remove a classe 'active' de todos os links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    
    // Verifica se o link corresponde à página atual
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });