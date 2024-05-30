const useCases = require('./useCases');

module.exports = [
  {
    type: 'html',
    value: '<span class=\'sidebar_title\'>Introduction</span>',
    defaultStyle: true,
    className: 'sidebar_title',
  },
  {
    type: 'doc',
    id: 'allegra/overview',
  },
  {
    type: 'doc',
    id: 'allegra/how_allegra_works',
  },
  {
    type: 'doc',
    id: 'allegra/architecture',
  },
  {
    type: 'doc',
    id: 'allegra/deploy',
  },
  ...useCases,
  // {
  //   type: 'category',
  //   label: 'Allegra',
  //   link: {
  //     type: "doc",
  //     id: "allegra/allegra"
  //   },
  //   collapsed: false,
  //   collapsible: false,
  //   items: [
  //   ],
  // },
];