const jstsEngine = require('jsts-engine')

module.exports = {

  read: function(selector = '[type="text/jsts"]') {

    return [...document.querySelectorAll(selector)]
      .map(tag => tag.innerHTML)

  },

  process: function(strings = [], environment = {}) {

    return Array.isArray(strings)
           ? strings.map(string => jstsEngine(string, environment))
           : jstsEngine(strings, environment)

  },

  render: function(strings = [], tag = document.body) {

    tag.innerHTML += strings
      .map(string => string[0])
      .join('\n')

    return tag

  },

  mount: function(
    selector = '[type="text/jsts"]',
    tag = document.body,
    environment = {}
  ) {

    return render(
      process(
        read(selector),
        environment
      ),
      tag
    )

  }

}