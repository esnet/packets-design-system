// Runs right after <body> opens, before anything renders, to avoid a
// flash of the wrong theme or palette.
(function () {
  if (localStorage.getItem('packets-theme') === 'dark') {
    document.body.classList.add('dark');
  }

  const palette = localStorage.getItem('packets-palette');

  if (palette && palette !== 'default') {
    document.body.dataset.palette = palette;
  }
})();