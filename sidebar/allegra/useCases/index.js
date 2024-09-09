module.exports = [
  {
    type: 'html',
    value: '<span class=\'sidebar_title\'>Use Cases</span>',
    defaultStyle: true,
    className: 'sidebar_title',
  },
  {
    type: 'doc',
    id: 'allegra/use_cases/web2',
  },
  {
    type: 'category',
    label: 'Web3',
    link: {
      type: 'doc',
    id: 'allegra/use_cases/web3',
    },
    collapsed: true,
    collapsible: true,
    items: [
      'allegra/use_cases/decentralized_ai',
      'allegra/use_cases/decentralizing_dex'
    ],
  }
]