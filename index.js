(function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const s of t.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const a = [
    {
      label: 'How does internet work ?',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
    },
    {
      label: 'How does a browser work ?',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
    },
    {
      label: 'Learn html',
      link: 'https://www.w3schools.com/html/html_intro.asp',
    },
    { label: 'Learn css', link: 'https://web.dev/learn/css/' },
    { label: 'Learn Javascript', link: 'https://javascript.info' },
    {
      label: 'DOM',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/',
    },
    { label: 'REST', link: 'https://www.codecademy.com/article/what-is-rest' },
    {
      label: 'fetch',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    },
    { label: 'React', link: 'https://react.dev/learn' },
  ],
  i = [{ label: 'git', link: 'https://www.atlassian.com/git' }],
  c = [
    {
      label: 'npm',
      link: 'https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm',
    },
  ],
  d = [
    { label: 'webpack', link: 'https://webpack.js.org/' },
    { label: 'prettier', link: 'https://prettier.io/' },
    { label: 'eslint', link: 'https://eslint.org/' },
  ],
  p = [
    { label: 'Nodejs', link: 'https://nodejs.org/dist/latest-v18.x/docs/api/' },
    {
      label: 'Express',
      link: 'https://expressjs.com/en/starter/installing.html',
    },
    { label: 'Nestjs', link: 'https://docs.nestjs.com/' },
  ],
  u = [
    { label: 'Event Loop', link: 'https://youtu.be/8aGhZQkoFbQ' },
    { label: 'How does react work ?', link: 'https://react.gg/visualized' },
  ],
  b = [
    { label: 'Basics', value: a },
    { label: 'Package Managers', value: c },
    { label: 'Version Control', value: i },
    { label: 'Build Tools', value: d },
    { label: 'Backend (node)', value: p },
    { label: 'Advanced', value: u },
  ];
document.querySelector('#app').innerHTML = `
<div>
${b
  .map(
    (o) => `<h3>${o.label}</h3>
${o.value
  .map(
    (l) =>
      `<div class="item"><a href=${l.link} target="_blank" rel="noopener noreferrer">${l.label}</a></div>`
  )
  .join('')}`
  )
  .join('')}

</div>
`;
