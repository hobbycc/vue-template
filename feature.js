module.exports = [
    {
      name: 'feature',
      type: 'checkbox',
      message: 'select feature:',
      choices: [
        {
          name: 'vue-router',
          value: 'router'
        },
        {
          name: 'typescript',
          value: 'ts'
        },
        {
          name: 'vuex',
          value: 'vuex'
        },
        {
          name: '中英双语',
          value: 'i18n',
          checked: true
        },
      ]
    }
]