window.MathJax = {
  showMathMenu: false,
  messageStyle: 'none',
  errorSettings: { style: { color: '#000000', 'font-style': 'normal' } },
  'HTML-CSS': {
    linebreaks: { automatic: true, width: 'container' },
    EqnChunk: 150,
    EqnChunkDelay: 20,
  },
  tex2jax: {
    inlineMath: [['[math]', '[/math]']],
    displayMath: [],
    ignoreClass: 'edit_latex|qtext_editor_content|ignore_latex',
    processClass: 'render_latex',
    processEnvironments: false,
    preview: 'none',
  },
  TeX: {
    noUndefined: { attributes: { mathcolor: 'red' } },
    noErrors: {
      multiLine: true,
      style: { 'max-width': '100%', overflow: 'hidden' },
    },
    Macros: {
      C: '{\\mathbb{C}}',
      N: '{\\mathbb{N}}',
      O: '{\\emptyset}',
      Q: '{\\mathbb{Q}}',
      R: '{\\mathbb{R}}',
      Z: '{\\mathbb{Z}}',
    },
  },
  'fast-preview': { disabled: true },
  Safe: {
    allow: {
      URLs: 'none',
      classes: 'none',
      cssIDs: 'none',
      styles: 'none',
      fontsize: 'none',
      require: 'none',
    },
  },
}
