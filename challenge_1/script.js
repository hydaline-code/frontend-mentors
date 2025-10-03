document.getElementById('ham-icon').onclick = function() {
  const nav = document.querySelector('header nav ul');
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const isOpen = nav.classList.contains('open');

  if (isOpen) {
    nav.classList.remove('open');
    hamburger.style.display = '';
    close.style.display = 'none';
  } else {
    nav.classList.add('open');
    hamburger.style.display = 'none';
    close.style.display = '';
  }
};