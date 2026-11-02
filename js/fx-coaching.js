(() => {
  const R = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.fxc-card img').forEach(i => i.addEventListener('error', () => i.closest('.fxc-card').classList.add('fx-broken')));
  const hero = document.querySelector('.hero');
  if (hero && innerWidth > 1000) {
    const c = document.createElement('div'); c.className = 'fxc-chips'; c.setAttribute('aria-hidden', 'true');
    c.innerHTML = [['Mock tests', '30%', '2%', 1.1], ['Live doubts', '40%', '24%', 1.5], ['Mentor review', '20%', '48%', 1.9], ['Study plans', '34%', '70%', 2.3], ['Rank tracker', '24%', '92%', 2.7]].map(([t, x, y, d]) => `<span style="--x:${x};--y:${y};--d:${d}s">${t}</span>`).join('');
    hero.append(c);
  }
  if (R || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('fxc-js');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = e.target; t.classList.add('in', 'fxc-in'); setTimeout(() => t.classList.add('settled'), 1400); io.unobserve(t); } }), { threshold: .15 });
  document.querySelectorAll('.fxc-card').forEach(el => io.observe(el));
  document.querySelectorAll('.program-card,.mentor-card').forEach((el, i) => { el.classList.add('fxc-in-pre'); el.style.setProperty('--dl', (i % 4) * .08 + 's'); io.observe(el); });
})();
