const coreConcepts = require('./coreConcepts');

module.exports = [
  {
    type: 'html',
    value: '<span class=\'sidebar_title\'>Introduction</span>',
    defaultStyle: true,
    className: 'sidebar_title',
  },
  ...coreConcepts
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