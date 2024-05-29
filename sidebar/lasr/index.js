const coreConcepts = require('./coreConcepts');
const gettingStarted = require('./gettingStarted');

module.exports = [
  // {
  //   type: 'html',
  //   value: '<span class=\'sidebar_title\'>Introduction</span>',
  //   defaultStyle: true,
  //   className: 'sidebar_title',
  // },
  ...gettingStarted,
  ...coreConcepts,
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