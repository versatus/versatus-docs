const gettingStarted = require('./gettingStarted');
const coreConcepts = require('./coreConcepts');
const tutorials = require('./tutorials');
const lasrGuides = require('./lasrGuides');
const useCases = require('./useCases');

module.exports = [
  // {
  //   type: 'html',
  //   value: '<span class=\'sidebar_title\'>Introduction</span>',
  //   defaultStyle: true,
  //   className: 'sidebar_title',
  // },
  ...gettingStarted,
  ...coreConcepts,
  ...tutorials,
  ...lasrGuides,
  ...useCases,
  // {
  //   type: 'category',
  //   label: 'LASR',
  //   link: {
  //     type: "doc",
  //     id: "lasr/lasr"
  //   },
  //   collapsed: false,
  //   collapsible: false,
  //   items: [
  //   ],
  // },
];