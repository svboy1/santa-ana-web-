// Menú móvil
(function () {
  var abrir = document.querySelector('[data-menu-abrir]');
  var cerrar = document.querySelector('[data-menu-cerrar]');
  var drawer = document.getElementById('menu-movil');
  if (!abrir || !drawer) return;
  function set(open) {
    drawer.classList.toggle('abierto', open);
    abrir.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && cerrar) cerrar.focus();
    if (!open) abrir.focus();
  }
  abrir.addEventListener('click', function () { set(true); });
  if (cerrar) cerrar.addEventListener('click', function () { set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('abierto')) set(false);
  });
})();

// Fecha del día en la barra superior
(function () {
  var el = document.querySelector('[data-fecha]');
  if (!el) return;
  try {
    var t = new Date().toLocaleDateString('es-SV', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/El_Salvador' });
    el.textContent = t.charAt(0).toUpperCase() + t.slice(1);
  } catch (e) {}
})();
