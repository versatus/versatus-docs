module.exports = [
  {
    type: 'html',
    value: '<span class=\'sidebar_title\'>Tutorials</span>',
    defaultStyle: true,
    className: 'sidebar_title',
  },
  {
    type: 'doc',
    id: 'lasr/tutorials/tutorials',
  },
  {
    type: 'category',
    label: 'Deploy Templates',
    collapsed: true,
    collapsible: true,
    items: [
      'lasr/tutorials/templates/fungible',
      'lasr/tutorials/templates/non_fungible',
      'lasr/tutorials/templates/faucet'
    ],
  },
  {
    type: 'category',
    label: 'BURD',
    link: {
      type: "doc",
      id: "lasr/tutorials/burd"
    },
    collapsed: true,
    collapsible: true,
    items: [
      'lasr/tutorials/burd/deploy',
      'lasr/tutorials/burd/explore_the_code',
      'lasr/tutorials/burd/using_burd'
    ],
  },
  {
    type: 'category',
    label: 'LASR Chess',
    link: {
      type: "doc",
      id: "lasr/tutorials/chess"
    },
    collapsed: true,
    collapsible: true,
    items: [
      'lasr/tutorials/chess/deploy',
      'lasr/tutorials/chess/explore_the_code',
      'lasr/tutorials/chess/playing_chess'
    ],
  },
]