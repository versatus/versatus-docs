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
    type: 'doc',
    id: 'lasr/lasr_development_process',
  },
  {
    type: 'doc',
    id:  'lasr/creating_an_account',
  },
  {
    type: 'category',
    label: 'Creating your First Program',
    link: {
      type: "doc",
      id:  'lasr/creating_your_first_program',
    },
    collapsed: true,
    collapsible: true,
    items: [
      'lasr/wsl_install',
    ],
  },
]