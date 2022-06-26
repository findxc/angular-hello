const { mock } = require('mockjs')

module.exports = {
  'GET /role': (req, res) => {
    const list = mock({
      'data|5': [
        {
          'id|+1': 1,
          name: '@name',
        },
      ],
    }).data
    res.send([{ id: 'admin', name: 'admin' }].concat(list))
  },

  'GET /user': (req, res) => {
    res.send(
      mock({
        message: 'success',
        total: 25,
        'data|10': [
          {
            'id|+1': 1,
            name: '@name',
            gender: '@pick(male, female)',
            email: '@email',
            role: '@natural(1,5)',
          },
        ],
      })
    )
  },
}
