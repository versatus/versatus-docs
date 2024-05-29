module.exports = [
  {
    type: 'html',
    value: '<span class=\'sidebar_title\'>Introduction</span>',
    defaultStyle: true,
    className: 'sidebar_title',
  },
  {
    type: 'doc',
    id: 'lasr/overview',
  },
  {
    type: 'category',
    label: 'Getting Started',
    collapsed: true,
    collapsible: true,
    items: [
      'lasr/getting_started/versatus_lasr_overview',
      'lasr/getting_started/creating_an_account',
      'lasr/getting_started/creating_your_first_program',
    ],
  },
]