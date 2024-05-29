const gettingStarted = require('./gettingStarted');
const coreConcepts = require('./coreConcepts');
const lasrGuides = require('./lasrGuides');

module.exports = [
  // {
  //   type: 'html',
  //   value: '<span class=\'sidebar_title\'>Introduction</span>',
  //   defaultStyle: true,
  //   className: 'sidebar_title',
  // },
  ...gettingStarted,
  ...coreConcepts,
  ...lasrGuides,
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